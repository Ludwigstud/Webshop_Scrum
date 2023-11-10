using Castle.Core.Resource;
using Castle.Core.Smtp;
using Manero.Enums;
using Manero.Interfaces;
using Manero.Models;
using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.Entities;
using Manero.Models.Schemas;
using Manero.Repos;
using Manero.Services;
using Manero.Tests.Fakes;

namespace Manero.Tests.IntegrationTests;


public class CreditCardService_Tests : IClassFixture<DatabaseFixture>
{
    private readonly ICreditCardService _service;
    private readonly CustomerCardRepo _repository;
    private readonly DatabaseFixture _fixture;

    public CreditCardService_Tests(DatabaseFixture fixture)
    {
        _fixture = fixture;
        _repository = new CustomerCardRepo(_fixture.Context);
        _service = new CreditCardService(_repository);
    }

    private async Task SeedDummyData(DataContext context)
    {
        _fixture.Context.CustomerCard.RemoveRange(_fixture.Context.CustomerCard);
        var creditCard1 = new CustomerCardEntity()
        {
            Id = 1,
            PaymentType = "Creditcard",
            Provider = "Visa",
            FullName = "John Doe",
            Number = "5678 1234 5678 9012",
            CVV = 456,
            ExpiryDate = "12/25",
            CustomerId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8b"
        };

        var creditCard2 = new CustomerCardEntity()
        {   Id = 2,
            PaymentType = "Creditcard",
            Provider = "Mastercard",
            FullName = "Jane Smith",
            Number = "1234 5678 9012 3456",
            CVV = 789,
            ExpiryDate = "10/23",
            CustomerId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8b"
        };

        await context.CustomerCard.AddAsync(creditCard1);
        await context.CustomerCard.AddAsync(creditCard2);
        await context.SaveChangesAsync();
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

    [Fact]
    public async Task GetAllAsync_Should_ReturnServiceResponseWithListOfCreditCardDto()
    {
        //Arrange
        string userId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8b";
        await SeedDummyData(_fixture.Context);
        var request = new ServiceRequest<string>()
        {
            Content = userId,
        };

        //Act
        var result = await _service.GetAllAsync(request);

        //Assert
        Assert.NotNull(result.Content);
        Assert.IsType<ServiceResponse<List<CreditCardDto>>>(result);
        Assert.Equal(2, result.Content.Count);
        Assert.Equal("5678 1234 5678 9012", result.Content[0].Number);
        Assert.Equal("1234 5678 9012 3456", result.Content[1].Number);
    }

    [Fact]
    public async Task GetAsync_Should_Return_CreditCardDto_And_OKResponse()
    {
        //Arrange
        string userId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8b";
        int creditCardId = 1; 
        await SeedDummyData(_fixture.Context);
        var request = new ServiceRequest<(int, string)>()
        {
            Content = (creditCardId, userId)
        };

        //Act
        var result = await _service.GetAsync(request);

        //Assert
        Assert.Equal(1, result.Content!.Id);
        Assert.Equal("5678 1234 5678 9012", result.Content!.Number);
        Assert.IsType<ServiceResponse<CreditCardDto>>(result);
        Assert.Equal(StatusCode.Ok, result.StatusCode);
    }
}

