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
    private readonly ProfileService _profileService;
    public ProfileController(UserManager<IdentityUser> userManager, DataContext context, ProfileService profileService)
    {
        _userManager = userManager;
        _context = context;
        _profileService = profileService;
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
    [HttpDelete("DeleteProfileAddress")]
    public async Task<IActionResult> DeleteProfileAddress(Address address)
    {
        try
        {
            if (ModelState.IsValid)
            {
                var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                var result = await _profileService.DeleteAddressAsync(address, userId!);

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
    
}