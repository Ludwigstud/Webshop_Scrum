using Manero.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Manero.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    private readonly ICategoryService _categoryService;

    public CategoriesController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [HttpGet]
    public async Task<ActionResult> GetCategories()
    {
        var categories = await _categoryService.GetAllAsync();

        return Ok(categories);
    }
}
