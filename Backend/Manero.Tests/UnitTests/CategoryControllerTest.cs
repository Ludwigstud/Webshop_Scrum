using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Manero.Controllers;
using Manero.Interfaces;
using Manero.Models.dto;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace Manero.Tests.UnitTests
{
    public class CategoriesControllerTests
    {
        [Fact]
        public async Task GetCategories_ReturnsListOfCategories()
        {
            // Arrange
            var mockCategoryService = new Mock<ICategoryService>();
            var categoriesController = new CategoriesController(mockCategoryService.Object);

            var categories = new List<CategoryDto>
            {
                new CategoryDto { Id = 1, CategoryName = "Category 1" },
                new CategoryDto { Id = 2, CategoryName = "Category 2" }
                
            };

            // Setup the mock to return categories when GetAllAsync is called
            mockCategoryService.Setup(service => service.GetAllAsync()).ReturnsAsync(categories);

            // Act
            var result = await categoriesController.GetCategories();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var resultCategories = Assert.IsAssignableFrom<List<CategoryDto>>(okResult.Value);
            Assert.Equal(categories.Count, resultCategories.Count);
        }
    }
}
