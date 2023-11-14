using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.DTO;
using Manero.Models.Entities;
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




    [HttpGet("GetProduct")]
    public async Task<IActionResult> GetProducts()
    {
        try
        {
            var items = await _context.Products.ToListAsync();
            var products = new List<Models.dto.Product>();
            foreach (var item in items)
                products.Add(new Models.dto.Product
                {
                    Id = item.Id,
                    ProductName = item.ProductName,
                    Price = item.Price,
                    Description = item.Description,
                    ImageUrl = item.ImageUrl
                });

            return Ok(products);
        }
        catch
        {
           

            return StatusCode(StatusCodes.Status500InternalServerError, "A database error occurred while fetching products.");
        }
    }

    [HttpGet("GetproductsHadi")]
    public async Task<IActionResult> GetProductsHadi()
    {
        var items = await _context.Products.ToListAsync();
        var products = new List<ProductEntity>();
        foreach (var item in items)
        {
            products.Add(new ProductEntity
            {
                Id = item.Id,
                ProductName = item.ProductName,
                Price = item.Price,
                PriceAfterSale = item.PriceAfterSale,
                Description = item.Description,
                ImageUrl = item.ImageUrl,
                CategoryId = item.CategoryId
            });
        }

        if (products.Count == 0)
        {
            return BadRequest();
        }
        else
        {
            return Ok(products);
        }
    }
    public async Task<IActionResult> arsle()
    {
        var items = await _context.Products.ToListAsync();
        var products = new List<ProductEntity>();
        foreach (var item in items)
        {
            products.Add(new ProductEntity
            {
                Id = item.Id,
                ProductName = item.ProductName,
                Price = item.Price,
                PriceAfterSale = item.PriceAfterSale,
                Description = item.Description,
                ImageUrl = item.ImageUrl,
                CategoryId = item.CategoryId
            });
        }

        if (products.Count == 0)
        {
            return BadRequest();
        }
        else
        {
            return Ok(products);
        }
    }

}
