using Manero.Controllers;
using Manero.Interfaces;
using Manero.Models.Contexts;
using Manero.Models.Entities;
using Manero.Models.Schemas;
using Manero.Repos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Assert = Xunit.Assert;

namespace Manero.Tests.IntegrationTests
{
    public class DiscountController_Tests
    {
        [Fact]
        public async Task Delete_ReturnsOkResultWithDeletedPromoCode()
        {
            // Arrange
            var discountService_Mock = new Mock<IDiscountService>();
            var discountId = Guid.NewGuid();
            var deletedDiscount = new DiscountEntity { Id = discountId, DiscountName = "Discount", Discount = 15, ExpiringDate = DateTime.Now.AddDays(1) };
            discountService_Mock.Setup(x => x.DeleteAsync(discountId)).ReturnsAsync(deletedDiscount);

            var controller = new DiscountController(discountService_Mock.Object);

            // Act
            var result = await controller.Delete(discountId);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsType<DiscountEntity>(okResult.Value);
            Assert.Equal(deletedDiscount, model);
        }
    }
}