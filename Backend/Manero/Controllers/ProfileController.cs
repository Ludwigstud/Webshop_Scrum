using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.Entities;
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

    public ProfileController(UserManager<IdentityUser> userManager, DataContext context)
    {
        _userManager = userManager;
        _context = context;
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
}