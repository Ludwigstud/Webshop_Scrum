using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Manero.Controllers;
using Manero.Models.Contexts;
using Manero.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace Manero.Tests.UnitTests;

public class ProductsControllerTests
{
    [Fact]
    public async Task GetProductsHadi_ReturnsListOfProducts()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        // You can use an in-memory database for testing purposes
        using (var context = new DataContext(options))
        {
            context.Products.Add(new ProductEntity
            {
                Id = 1,
                ProductName = "Test Product 1",
                Price = 10,
                Description = "Description 1",
                ImageUrl = "image1.jpg",
                CategoryId = 1
            });

            context.Products.Add(new ProductEntity
            {
                Id = 2,
                ProductName = "Test Product 2",
                Price = 20,
                Description = "Description 2",
                ImageUrl = "image2.jpg",
                CategoryId = 2
            });

            context.SaveChanges();
        }

        using (var context = new DataContext(options))
        {
            var controller = new ProductsController(context);

            // Act
            var result = await controller.GetProductsHadi();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var products = Assert.IsAssignableFrom<List<ProductEntity>>(okResult.Value);
            Assert.Equal(2, products.Count); // Assuming you added 2 products in Arrange phase
        }
    }

}
