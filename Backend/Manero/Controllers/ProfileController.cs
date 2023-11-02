using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.Entities;
using Manero.Repos;
using Manero.Services;
using Microsoft.AspNetCore.Http.HttpResults;
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
    private readonly CustomerRepo _customerRepo;
    public ProfileController(UserManager<IdentityUser> userManager, DataContext context, CustomerAddressRepo customerAddressRepo, ProfileService profileService, AddressRepo addressRepo, AddressTagRepo addressTagRepo, CustomerRepo customerRepo)
    {
        _userManager = userManager;
        _context = context;
        _customerAddressRepo = customerAddressRepo;
        _profileService = profileService;
        _addressRepo = addressRepo;
        _addressTagRepo = addressTagRepo;
        _customerRepo = customerRepo;
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
            Email = userIdentity.Email!,
        };
        return Ok(userProfile);
    }

    [HttpPost("CreateProfileAddress")]
    public async Task<IActionResult> CreateProfileAddress(Address address)
    {
        try
        {
            if (ModelState.IsValid)
            {
                var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                var result = await _profileService.CreateAddressAsync(address, userId!);

                if (result != null)
                    return StatusCode((int)result.StatusCode, result);
                else
                    return Conflict();
            }
            else
            {
                return Conflict();
            }
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "A database error occurred");
        }
    }

    [HttpGet("GetProfileAddresses")]
    public async Task<IActionResult> GetProfileAddresses()
    {

        try
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var result = await _profileService.GetProfileAddressesAsync(userId!);

            if (result != null)
                return StatusCode((int)result.StatusCode, result);
            else
                return Conflict();
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "A database error occurred");
        }
       
    }
    [HttpPost("UpdateProfileAddress")]
    public async Task<IActionResult> UpdateProfileAddress(EditAddress editAddress)
    {
        try
        {
            if (ModelState.IsValid)
            {
                var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                var result = await _profileService.UpdateProfileAddressAsync(editAddress, userId!);

                if (result != null)
                    return StatusCode((int)result.StatusCode, result);
                else
                    return Conflict();
            }
            else
            {
                return Conflict();
            }
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "A database error occurred");
        }
    }
        

        



      /*  if (userId == null)
            return NotFound();

        AddressEntity addressEntity = await _addressRepo.GetAsync(x => x.StreetName == editAddress.CurrentAddress.StreetName && x.PostalCode == editAddress.CurrentAddress.PostalCode);

        var addressTag = await _addressTagRepo.GetAsync(x => x.TagName == editAddress.NewAddress.AddressTag);

        AddressEntity newAddressEntityMap = new AddressEntity()
        {
            StreetName = editAddress.NewAddress.StreetName,
            PostalCode = editAddress.NewAddress.PostalCode,
            City = editAddress.NewAddress.City,
            AddressTagId = addressTag.Id
        };

        var addressExists = await _addressRepo.GetAsync(x => x.StreetName == newAddressEntityMap.StreetName && x.PostalCode == newAddressEntityMap.PostalCode && x.City == newAddressEntityMap.City);
        CustomerAddressEntity customerAddressEntity = await _customerAddressRepo.GetAsync(x => x.CustomerId == userId && x.AddressId == addressEntity.Id);

        if (addressExists == null) 
        { 
            var createdAddress = await _addressRepo.CreateAsync(newAddressEntityMap);
            if (customerAddressEntity != null)
            {
                customerAddressEntity.AddressId = createdAddress.Id;

                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        else
        {
            if(customerAddressEntity != null)
            {
                customerAddressEntity.AddressId = addressExists.Id;

                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        } */

         //AddressEntity newAddressEntity = await _addressRepo.CreateAsync(newAddressEntityMap);

       



       
    
}