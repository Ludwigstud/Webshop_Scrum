using Manero.Interfaces;
using Manero.Models.Contexts;
using Manero.Repos;
using Manero.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.V4.Pages.Account.Manage.Internal;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestPlatform.ObjectModel;
using Moq;
using System.Security.Claims;

namespace Manero.Tests.Fakes
{
    public class InjectFixture : IDisposable
    {
        public readonly UserManager<IdentityUser> UserManager;
        public readonly SignInManager<IdentityUser> SignInManager;
        public readonly IAuthService _authService;
        public readonly DataContext DbContext;


        public InjectFixture()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase(databaseName: "FakeDatabase")
                .Options;

            DbContext = new DataContext(options);


            var fakeUserManager = new Mock<FakeUserManager>();

            var signInManager = new Mock<FakeSignInManager>();




            fakeUserManager.Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(new IdentityUser { });

            fakeUserManager.Setup(x => x.GetClaimsAsync(It.IsAny<IdentityUser>()))
            .ReturnsAsync(new List<Claim>());

            fakeUserManager.Setup(x => x.DeleteAsync(It.IsAny<IdentityUser>()))
                .ReturnsAsync(IdentityResult.Success);

            fakeUserManager.Setup(x => x.CreateAsync(It.IsAny<IdentityUser>(), It.IsAny<string>()))
            .ReturnsAsync((IdentityUser user, string password) =>
            {
                var passwordValidator = new PasswordValidator<IdentityUser>();
                var validationResult = passwordValidator.ValidateAsync(fakeUserManager.Object, user, password).Result;

                if (validationResult.Succeeded)
                {
                    var passwordHasher = new PasswordHasher<IdentityUser>();
                    user.PasswordHash = passwordHasher.HashPassword(user, password);

                    DbContext.Users.Add(user);
                    return IdentityResult.Success;
                }
                else
                {
                    var errors = validationResult.Errors.Select(error => new IdentityError
                    {
                        Code = error.Code,
                        Description = error.Description
                    }).ToArray(); 

                    return IdentityResult.Failed(errors);
                }
            });




            fakeUserManager.Setup(x => x.UpdateAsync(It.IsAny<IdentityUser>()))
                .ReturnsAsync(IdentityResult.Success);

            fakeUserManager.Setup(x =>
                    x.ChangeEmailAsync(It.IsAny<IdentityUser>(), It.IsAny<string>(), It.IsAny<string>()))
                .ReturnsAsync(IdentityResult.Success);



            signInManager.Setup(x =>
            x.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>()))
             .ReturnsAsync((string email, string password, bool lockout, bool shouldLockout) =>
             {
                 var user = DbContext.Users.SingleOrDefault(u => u.Email == email);
                 if (user != null)
                 {
                     var passwordHasher = new PasswordHasher<IdentityUser>();
                     var result = passwordHasher.VerifyHashedPassword(user, user.PasswordHash!, password);
                     if (result == PasswordVerificationResult.Success)
                     {
                         return SignInResult.Success;
                     }
                 }

                 return SignInResult.Failed;
             });


            UserManager = fakeUserManager.Object;
            SignInManager = signInManager.Object;
            _authService = new AuthService(UserManager, DbContext, SignInManager);
        }



        public void Dispose()
        {
            UserManager?.Dispose();
            DbContext?.Dispose();
        }
    }
}
