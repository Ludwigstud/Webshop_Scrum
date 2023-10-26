using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;

namespace Manero.Tests.Fakes
{
    public class FakeUserManager : UserManager<IdentityUser>
    {
        public FakeUserManager()
            : base(new Mock<IUserStore<IdentityUser>>().Object,
                   new Mock<IOptions<IdentityOptions>>().Object,
                   new Mock<IPasswordHasher<IdentityUser>>().Object,
                   new IUserValidator<IdentityUser>[] { new UserValidator<IdentityUser>() },
                   new IPasswordValidator<IdentityUser>[] { new PasswordValidator<IdentityUser>() },
                   new Mock<ILookupNormalizer>().Object,
                   new Mock<IdentityErrorDescriber>().Object,
                   new Mock<IServiceProvider>().Object,
                   new Mock<ILogger<UserManager<IdentityUser>>>().Object)
        {

            base.Options = new IdentityOptions
            {
                Password = new PasswordOptions
                {
                    RequiredLength = 8, 
                    RequireDigit = true,
                    RequireLowercase = true,
                    RequireUppercase = true,
                    RequireNonAlphanumeric = true
                }
            };
        }
    }
}
