using Manero.Controllers;
using Manero.Interfaces;
using Manero.Models.Entities;
using Manero.Models.Schemas;
using Manero.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Manero.Tests.Fakes;
using Assert = Xunit.Assert;

namespace Manero.Tests.UnitTests
{
    public class DiscountService_Tests
    {

        [Fact]
        public async Task CreateAsync__Should_Create_New_Discount_And_Return_Discount()
        {
            // Arrange
            var discountServiceMock = new Mock<IDiscountService>();
            var dCSchema = new DiscountSchema { DiscountName = "New discount", Discount = 15, ExpiringDate = DateTime.Now.AddDays(1) };
            var createdDiscount = new DiscountEntity { Id = Guid.NewGuid(), DiscountName = "New Discount", Discount = 15, ExpiringDate = DateTime.Now.AddDays(1) };
            discountServiceMock.Setup(service => service.CreateAsync(dCSchema)).ReturnsAsync(createdDiscount);

            var controller = new DiscountController(discountServiceMock.Object);

            // Act
            var result = await controller.Create(dCSchema);

            // Assert
            var Result = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsType<DiscountEntity>(Result.Value);
            Assert.Equal(createdDiscount, model);
        }

 
    }
}
