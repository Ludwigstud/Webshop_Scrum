using Manero.Models;
using Manero.Models.Contexts;
using Manero.Models.Schemas;
using Manero.Repos;
using Manero.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Manero.Models.dto;
using Manero.Models.Entities;
using Azure;

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

        public async Task<ServiceResponse<Profile>> GetProfileAddressesAsync(string userId)
        {
            var response = new ServiceResponse<Profile>();

            if (userId == null)
            {
                response.StatusCode = StatusCode.NotFound;
                response.Content = null;
            }
            else
            {
                var profile = await GetProfile(userId!);

                if (profile == null)
                {
                    response.StatusCode = StatusCode.NotFound;
                    response.Content = null;
                }
                else
                {
                    var addresses = await _customerAddressRepo.GetAllAsync(x => x.CustomerId == userId);

                    var profileAddress = new List<Address>();

                    foreach (var addressId in addresses)
                    {
                        var Address = await _addressRepo.GetAsync(x => x.Id == addressId.AddressId);
                        var findTagId = await _customerAddressRepo.GetAsync(x => x.CustomerId == userId && x.AddressId == addressId.AddressId);
                        var tagName = await _addressTagRepo?.GetAsync(x => x.Id == findTagId.AddressTagId)!;
                        profileAddress.Add(new Address
                        {
                            StreetName = Address.StreetName,
                            PostalCode = Address.PostalCode,
                            City = Address.City,
                            AddressTag = tagName.TagName
                        });
                    }
                    var userProfile = new Profile
                    {
                        FirstName = profile.Content!.FirstName,
                        LastName = profile.Content.LastName,
                        Email = profile.Content.Email,
                        Address = profileAddress
                    };
                    response.Content = userProfile;
                    response.StatusCode = StatusCode.Ok;
                }

            }
            return response;
        }

        public async Task<ServiceResponse<EditAddress>> UpdateProfileAddressAsync(EditAddress editAddress, string userId)
        {
            var response = new ServiceResponse<EditAddress>();
            if (userId == null)
            {
                response.StatusCode = StatusCode.NotFound;
                response.Content = null;
            }
            else
            {
                AddressEntity addressEntity = await _addressRepo.GetAsync(x => x.StreetName == editAddress.CurrentAddress.StreetName && x.PostalCode == editAddress.CurrentAddress.PostalCode && x.City == editAddress.CurrentAddress.City);

                if (addressEntity == null)
                {
                    response.StatusCode = StatusCode.NotFound;
                    response.Content = null;
                }
                else
                {
                    var addressTag = await _addressTagRepo.GetAsync(x => x.TagName == editAddress.NewAddress.AddressTag);

                    AddressEntity newAddressEntityMap = new AddressEntity()
                    {
                        StreetName = editAddress.NewAddress.StreetName,
                        PostalCode = editAddress.NewAddress.PostalCode,
                        City = editAddress.NewAddress.City,
                    };
                    var addressExists = await _addressRepo.GetAsync(x => x.StreetName == newAddressEntityMap.StreetName && x.PostalCode == newAddressEntityMap.PostalCode && x.City == newAddressEntityMap.City);
                    CustomerAddressEntity customerAddressEntity = await _customerAddressRepo.GetAsync(x => x.CustomerId == userId && x.AddressId == addressEntity.Id);

                    if (addressExists == null)
                    {
                        var createdAddress = await _addressRepo.CreateAsync(newAddressEntityMap);
                        if (customerAddressEntity != null)
                        {
                            customerAddressEntity.AddressId = createdAddress.Id;
                            customerAddressEntity.AddressTagId = addressTag.Id;

                            await _dataContext.SaveChangesAsync();
                            response.StatusCode = StatusCode.Ok;
                            response.Content = editAddress;
                        }
                        else
                        {
                            response.StatusCode = StatusCode.NotFound;
                            response.Content = null;
                        }
                    }
                    else
                    {
                        if (customerAddressEntity != null)
                        {
                            customerAddressEntity.AddressId = addressExists.Id;
                            customerAddressEntity.AddressTagId = addressTag.Id;

                            await _dataContext.SaveChangesAsync();
                            response.StatusCode = StatusCode.Ok;
                            response.Content = editAddress;
                        }
                        else
                        {
                            response.StatusCode = StatusCode.NotFound;
                            response.Content = null;
                        }
                    }
                }
            }
            return response;
        }
        public async Task<ServiceResponse<Address>> CreateAddressAsync(Address address, string userId)
        {
            var response = new ServiceResponse<Address>();

            if (userId == null)
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
                    var addressExists = await _addressRepo.GetAsync(x => x.StreetName == address.StreetName && x.PostalCode == address.PostalCode && x.City == address.City);

                    if (addressExists == null)
                    {
                        AddressEntity addressEntity = address;


                        var newAddress = await _addressRepo.CreateAsync(addressEntity);

                        if (newAddress == null)
                        {
                            response.StatusCode = StatusCode.NotFound;
                            response.Content = null;
                        }
                        else
                        {
                            var newCustomerAddress = new CustomerAddress()
                            {
                                AddressId = newAddress.Id,
                                CustomerId = userId,
                                AddressTagId = addressTag.Id,
                            };

                            var createCustomerAddress = await _customerAddressRepo.CreateAsync(newCustomerAddress);

                            if (createCustomerAddress == null)
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
                    else
                    {
                        var newCustomerAddress = new CustomerAddress()
                        {
                            AddressId = addressExists.Id,
                            CustomerId = userId,
                            AddressTagId = addressTag.Id,
                        };

                        var createCustomerAddress = await _customerAddressRepo.CreateAsync(newCustomerAddress);

                        if (createCustomerAddress == null)
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
        public async Task<ServiceResponse<CustomerAddress>> DeleteAddressAsync(Address address, string userId)
        {
            var response = new ServiceResponse<CustomerAddress>();

            if (userId == null)
            {
                response.StatusCode = StatusCode.NotFound;
                response.Content = null;
            }
            else
            {
                var addressEntity = await _addressRepo.GetAsync(x => x.StreetName == address.StreetName && x.City == address.City && x.PostalCode == address.PostalCode);
                var customerAddress = await _customerAddressRepo.GetAsync(x => x.AddressId == addressEntity.Id && x.CustomerId == userId);
                if (customerAddress == null)
                {
                    response.StatusCode = StatusCode.NotFound;
                    response.Content = null;
                }
                else
                {
                    await _customerAddressRepo.DeleteAsync(x => x.Id == customerAddress.Id);
                    response.StatusCode = StatusCode.Ok;
                    response.Content = null;
                }
            }
            return response;
        }
    }
}
