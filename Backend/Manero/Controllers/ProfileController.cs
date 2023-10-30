using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.Entities;
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

    public ProfileController(UserManager<IdentityUser> userManager, DataContext context, CustomerAddressRepo customerAddressRepo, ProfileService profileService, AddressRepo addressRepo)
    {
        _userManager = userManager;
        _context = context;
        _customerAddressRepo = customerAddressRepo;
        _profileService = profileService;
        _addressRepo = addressRepo;
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

        var profile = _profileService.GetProfile(userId);

        var addresses = await _customerAddressRepo.GetAllAsync(x => x.CustomerId == userId);

        var profileAddress = new List<Address>();

        foreach(var addressId in addresses)
        {
            var Address = await _addressRepo.GetAsync(x => x.Id == addressId.Id);
            profileAddress.Add(Address);
        }
        var userProfile = new Profile
        {
            FirstName = profile.Result.Content!.FirstName,
            LastName = profile.Result.Content.LastName,
            Email = profile.Result.Content.Email,
            Address = profileAddress
        };
        return Ok(userProfile);
    }
}