using Manero.Models.Entities;
using Manero.Repos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Manero.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductRepo _productRepo;

        public ProductController(ProductRepo productRepo)
        {
            _productRepo = productRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProductsAsync()
        {
            try
            {
                var products = await _productRepo.GetAllProductsAsync();

                if (products != null)
                {
                    return Ok(products);
                }
                else
                {
                    return NotFound("No products found."); // Adjust the message as needed.
                }
            }
            catch (Exception ex)
            {
                // Log the error for debugging purposes
                Console.WriteLine(ex);

                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while fetching products.");
            }
        }
    }
}
