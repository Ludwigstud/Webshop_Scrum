using Manero.Interfaces;
using Manero.Models.dto;
using Manero.Repos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public class CategoryService : ICategoryService
{
    private readonly CategoryRepo _categoryRepo;

    public CategoryService(CategoryRepo categoryRepo)
    {
        _categoryRepo = categoryRepo ?? throw new ArgumentNullException(nameof(categoryRepo));
    }

    public async Task<List<CategoryDto>> GetAllAsync()
    {
        var dtos = new List<CategoryDto>();
        var entities = await _categoryRepo.GetAllCategoriesAsync(); // Use the custom method for manual mapping

        foreach (var entity in entities)
        {
            var dto = new CategoryDto
            {
                Id = entity.Id,
                CategoryName = entity.CategoryName,
                // Map other properties as needed
            };

            dtos.Add(dto);
        }

        return dtos;
    }
}
