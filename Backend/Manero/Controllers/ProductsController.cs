﻿using Manero.Models.Contexts;
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

<<<<<<< HEAD


    [HttpGet("GetProduct")]
=======
    [HttpGet]
>>>>>>> 41ac7a5e984fa7f5ab8f706c4ddec199cd5d1d4a
    public async Task<IActionResult> GetProducts()
    {
        try
        {
            var items = await _context.Products.ToListAsync();
            var products = new List<Product>();
            foreach (var item in items)
                products.Add(new Product
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
            products.Add(new ProductEntity
            {
                Id = item.Id,
                ProductName = item.ProductName,
                Price = item.Price,
                Description = item.Description,
                ImageUrl = item.ImageUrl,
                CategoryId = item.CategoryId

            }); ;


        if (products == null)
        {
            return Ok(products);
        }
        else return BadRequest();
    }
}
