using Microsoft.AspNetCore.Mvc;
using Manero.Repos.DataSeeder;
using Manero.Models.Contexts;

namespace Manero.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DatabaseSeederController : ControllerBase
{
    private readonly DataContext _context;
    

    public DatabaseSeederController(DataContext context)
    {
        _context = context;
    }

    [HttpPost("seed")]
    public IActionResult SeedDatabase()
    {
        try
        {
            Seeder.SeedAll(_context);
            return Ok("Database seeded successfully.");
        }
        catch (Exception ex)
        {
            return BadRequest($"Database seeding failed: {ex.Message}");
        }
    }

    [HttpPost("clear")]
    public IActionResult ClearDatabase()
    {
        try
        {
            Seeder.ClearDatabase(_context);
            return Ok("Database cleared successfully.");
        }
        catch (Exception ex)
        {
            return BadRequest($"Database clearing failed: {ex.Message}");
        }
    }
}
