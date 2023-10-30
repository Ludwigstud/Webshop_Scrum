using Manero.Models;
using Manero.Models.Contexts;
using Manero.Models.Schemas;
using Manero.Repos;
using Manero.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Manero.Models.dto;

namespace Manero.Services
{
    public class ProfileService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly CustomerRepo _customerRepo;
        private readonly DataContext _dataContext;
        public ProfileService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, CustomerRepo customerRepo, DataContext dataContext) 
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _customerRepo = customerRepo;
            _dataContext = dataContext;
        }
        public async Task<ServiceResponse<Profile>> GetProfile(string userId)
        {
            var response = new ServiceResponse<Profile>();
            if (userId == null)
            {
                response.StatusCode = StatusCode.NotFound;
                response.Content = null;
            }
            else
            {
                var userIdentity = await _userManager.FindByIdAsync(userId);
                if (userIdentity == null)
                {
                    response.StatusCode = StatusCode.NotFound;
                    response.Content = null;
                }
                else
                {
                    var userProfileEntity = await _dataContext.Customer.FirstOrDefaultAsync(x => x.Id == userId);

                    if (userProfileEntity == null)
                    {
                        response.StatusCode = StatusCode.NotFound;
                        response.Content = null;
                    }
                    else
                    {
                        var userProfile = new Profile
                        {
                            FirstName = userProfileEntity.FirstName,
                            LastName = userProfileEntity.LastName,
                            Email = userIdentity.Email!
                        };
                        response.StatusCode = StatusCode.Ok;
                        response.Content = userProfile;
                    }
                }
            }
            return response;
        }
    }
}
