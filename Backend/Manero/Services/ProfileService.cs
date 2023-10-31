using Manero.Models;
using Manero.Models.Contexts;
using Manero.Models.Schemas;
using Manero.Repos;
using Manero.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Manero.Models.dto;
using Manero.Models.Entities;

namespace Manero.Services
{
    public class ProfileService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly CustomerRepo _customerRepo;
        private readonly DataContext _dataContext;
        private readonly AddressRepo _addressRepo;
        private readonly CustomerAddressRepo _customerAddressRepo;
        private readonly AddressTagRepo _addressTagRepo;
        public ProfileService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, CustomerRepo customerRepo, DataContext dataContext, AddressTagRepo addressTagRepo, AddressRepo addressRepo, CustomerAddressRepo customerAddressRepo)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _customerRepo = customerRepo;
            _dataContext = dataContext;
            _addressTagRepo = addressTagRepo;
            _addressRepo = addressRepo;
            _customerAddressRepo = customerAddressRepo;
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
        public async Task<ServiceResponse<Address>> CreateAddressAsync(Address address, string userId)
        {
            var response = new ServiceResponse<Address>();

            if(userId == null)
            {
                response.StatusCode = StatusCode.NotFound;
                response.Content = null;
            }
            else
            {
                var addressTag = await _addressTagRepo.GetAsync(x => x.TagName == address.AddressTag);

                if (addressTag == null)
                {
                    response.StatusCode = StatusCode.NotFound;
                    response.Content = null;
                }
                else
                {
                    AddressEntity addressEntity = address;

                    addressEntity.AddressTagId = addressTag!.Id;


                    var newAddress = await _addressRepo.CreateAsync(addressEntity);

                    if(newAddress == null)
                    {
                        response.StatusCode = StatusCode.NotFound;
                        response.Content = null;
                    }
                    else
                    {
                        var newCustomerAddress = new CustomerAddress()
                        {
                            AddressId = newAddress.Id,
                            CustomerId = userId
                        };

                        var createCustomerAddress = await _customerAddressRepo.CreateAsync(newCustomerAddress);

                        if(createCustomerAddress == null)
                        {
                            response.StatusCode = StatusCode.NotFound;
                            response.Content = null;
                        }
                        else
                        {
                            response.StatusCode = StatusCode.Created;
                            response.Content = address;
                        }
                    }
                }
            }
            return response;
        }
    }
}
