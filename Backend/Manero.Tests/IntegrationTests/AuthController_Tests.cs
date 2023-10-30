using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Manero.Controllers;
using Manero.Models.Schemas;
using Manero.Tests.Fakes;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Manero.Tests.IntegrationTests
{
    public class AuthController_Tests
    {
        private readonly InjectFixture _injectFixture;
        private readonly AuthController _controller;
        public AuthController_Tests()
        {
            _injectFixture = new InjectFixture();
            _controller = new AuthController(_injectFixture._authService);
        }
        [Fact]
        public async Task SignUpAsync_Should_ReturnConflict_When_WrongEmailAndPassword()
        {
            var schema = new SignUpSchema() { FirstName ="test", Email = "testomain.com", LastName ="test", Password="das!"};

            var result = await _controller.SignUpNew(schema);

            Assert.IsType<ConflictResult>(result);

            _injectFixture.Dispose();
        }

        [Fact]
        public async Task SignUpAsync_Should_ReturnOk_When_SuccessfullyCreated()
        {
            var schema = new SignUpSchema() { FirstName = "test", Email = "test@domain.com", LastName = "test", Password = "BytMig123!" };

            var result = await _controller.SignUpNew(schema);

            Assert.Equal(201, (result as ObjectResult)?.StatusCode);

            _injectFixture.Dispose();
        }
    }
}
