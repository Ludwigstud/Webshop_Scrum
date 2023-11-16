using Manero.Models.Contexts;
using Manero.Models.Entities;
using Manero.Models.dto;
using Microsoft.EntityFrameworkCore;

namespace Manero.Repos;

public class CategoryRepo : MainRepository<CategoryEntity>
{
    public CategoryRepo(DataContext context) : base(context)
    {
    }

    public async Task<IEnumerable<CategoryDto>> GetAllCategoriesAsync()
    {
        try
        {
            var entities = await _context.Set<CategoryEntity>().ToListAsync();
            var dtos = entities.Select(entity => new CategoryDto
            {
                Id = entity.Id,
                CategoryName = entity.CategoryName,
            });

            return dtos;
        }
        catch { return null!; }
    }

}
