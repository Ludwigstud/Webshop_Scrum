using Manero.Models.Contexts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Manero.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{

    private readonly DataContext _context;

    public ProductsController(DataContext dataContext)
    {
        _context = dataContext;
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        return Ok(await _context.Products.Include(x => x.Category).ToListAsync());
    }








}
