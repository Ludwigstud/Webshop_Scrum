using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Repos;
using Manero.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Manero.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProfileController : ControllerBase
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly DataContext _context;
    private readonly CustomerAddressRepo _customerAddressRepo;
    private readonly ProfileService _profileService;
    private readonly AddressRepo _addressRepo;
    private readonly AddressTagRepo _addressTagRepo;
    public ProfileController(UserManager<IdentityUser> userManager, DataContext context, CustomerAddressRepo customerAddressRepo, ProfileService profileService, AddressRepo addressRepo, AddressTagRepo addressTagRepo)
    {
        _userManager = userManager;
        _context = context;
        _customerAddressRepo = customerAddressRepo;
        _profileService = profileService;
        _addressRepo = addressRepo;
        _addressTagRepo = addressTagRepo;
    }

    [HttpGet("GetProfile")]
    public async Task<IActionResult> GetProfile()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (userId == null)
            return NotFound();

        var userIdentity = await _userManager.FindByIdAsync(userId);
        if (userIdentity == null)
            return NotFound();

        var userProfileEntity = await _context.Customer.FirstOrDefaultAsync(x => x.Id == userId);

        if (userProfileEntity == null)
            return NotFound();

        var userProfile = new Profile
        {
            FirstName = userProfileEntity.FirstName,
            LastName = userProfileEntity.LastName,
            Email = userIdentity.Email,
        };
        return Ok(userProfile);
    }

    [HttpPost("CreateProfileAddress")]
    public async Task<IActionResult> CreateProfileAddress(Address address)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (userId == null)
            return NotFound();

        var profile = await _profileService.GetProfile(userId);
        
        if(profile == null)
            return NotFound();


        /* var addressTag = await _addressTagRepo.GetAsync(x => x.TagName == address.AddressTag);


         AddressEntity addressEntity = address;

         addressEntity.AddressTagId = addressTag.Id;


         var newAddress = await _addressRepo.CreateAsync(addressEntity);

         var newCustomerAddress = new CustomerAddress()
         {
             AddressId = newAddress.Id,
             CustomerId = userId
         };

         var createCustomerAddress = await _customerAddressRepo.CreateAsync(newCustomerAddress);

         if(createCustomerAddress == null)
         {
             return NotFound();
         } */
        var result = await _profileService.CreateAddressAsync(address, userId);

        if(result.Content != null)
            return Ok(result.Content);
        else
            return NotFound();

    } 

    [HttpGet("GetProfileAddresses")]
    public async Task<IActionResult> GetProfileAddresses()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if(userId == null)
            return NotFound();


        /*var userIdentity = await _userManager.FindByIdAsync(userId);
        if (userIdentity == null)
            return NotFound();

        var userProfileEntity = await _context.Customer.FirstOrDefaultAsync(x => x.Id == userId);

        if (userProfileEntity == null)
            return NotFound(); */

        var profile = await _profileService.GetProfile(userId);

        var addresses = await _customerAddressRepo.GetAllAsync(x => x.CustomerId == userId);

        var profileAddress = new List<Address>();

        foreach(var addressId in addresses)
        {
            var Address = await _addressRepo.GetAsync(x => x.Id == addressId.AddressId);
            var tagName = await _addressTagRepo?.GetAsync(x => x.Id == Address.AddressTagId)!;
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
        return Ok(userProfile);
    }
}