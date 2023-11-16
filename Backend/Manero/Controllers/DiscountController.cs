using Manero.Interfaces;
using Manero.Models.Schemas;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Manero.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscountController : ControllerBase
    {
        private readonly IDiscountService _discountService;

        public DiscountController(IDiscountService discountService)
        {
            _discountService = discountService;
        }


        [HttpGet("GetDiscounts")]
        public async Task<IActionResult> GetAll()
        {
            var list = await _discountService.GetAllAsync();

            return Ok(list);
        }

        [HttpPost]
        public async Task<IActionResult> Create(DiscountSchema dCSchema)
        {

            var discountCode = await _discountService.CreateAsync(dCSchema);

            return Ok(discountCode);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var discountCode = await _discountService.DeleteAsync(id);

            return Ok(discountCode);
        }
    }
}
