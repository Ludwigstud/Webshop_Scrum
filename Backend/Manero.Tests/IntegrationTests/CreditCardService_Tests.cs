using Manero.Enums;
using Manero.Interfaces;
using Manero.Models;
using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.Schemas;
using Manero.Repos;
using Manero.Services;
using Microsoft.EntityFrameworkCore;

namespace Manero.Tests.IntegrationTests;

public class CreditCardService_Tests
{
    private readonly ICreditCardService _service;
    private readonly CustomerCardRepo _repository;
    private readonly DataContext _context;


    public CreditCardService_Tests()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(databaseName: "FakeDatabase").Options;

        _context = new DataContext(options);
        _repository = new CustomerCardRepo(_context);
        _service = new CreditCardService(_repository);
    }

    [Fact]
    public async Task CreateAsync_Should_ReturnServiceResponseWithStatusCodeOK_And_CustomerCardDto_WhenCreatedSuccessfully()
    {
        //Arrange
        string userId = Guid.NewGuid().ToString();
        var schema = new AddCreditCardSchema()
        {
            PaymentType = "Creditcard",
            Provider = "Visa",
            FullName = "Dennis Frölander",
            Number = "1234 4567 8901 2345",
            CVV = 123,
            ExpiryDate = "12/29"
        };

        var request = new ServiceRequest<AddCreditCardSchema>()
        {
            Content = schema,
        };

        //Act
        var result = await _service.CreateAsync(request, userId);


        //Assert
        Assert.NotNull(result.Content);
        Assert.IsType<ServiceResponse<CreditCardDto>>(result);
        Assert.Equal(StatusCode.Created, result.StatusCode);
        Assert.Equal(schema.Number, result.Content.Number);
    }

    [Fact]
    public async Task CreateAsync_Should_ReturnServiceResponseWithStatusCodeBadRequest_And_Null_WhenNotCreated()
    {
        //Arrange
        string userId = Guid.NewGuid().ToString();
        var schema = new AddCreditCardSchema()
        {
            PaymentType = "Creditcard",
            //Removed FullName
            Provider = "Visa",
            Number = "1234 4567 8901 2345",
            CVV = 123,
            ExpiryDate = "12/29"
        };

        var request = new ServiceRequest<AddCreditCardSchema>()
        {
            Content = schema,
        };

        //Act
        var result = await _service.CreateAsync(request, userId);


        //Assert
        Assert.Null(result.Content);
        Assert.IsType<ServiceResponse<CreditCardDto>>(result);
        Assert.Equal(StatusCode.BadRequest, result.StatusCode);
    }
}
