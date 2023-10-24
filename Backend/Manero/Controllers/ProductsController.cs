using Manero.Models.Contexts;
using Manero.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Manero.Controllers
{
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
    }
}
