using Manero.Enums;
using Manero.Interfaces;
using Manero.Models;
using Manero.Models.dto;
using Manero.Models.Entities;
using Manero.Models.Schemas;
using Moq;

namespace Manero.Tests.UnitTests;

public class CreditCardService_Tests
{
    private readonly Mock<ICreditCardService> _creditCardServiceMock;

    public CreditCardService_Tests()
    {
        _creditCardServiceMock = new Mock<ICreditCardService>();
    }

    [Fact]
    public async Task CreateAsync_Should_ReturnStatusCodeCreated_WhenIsValid()
    {
        string userId = Guid.NewGuid().ToString();
        var schema = new AddCreditCardSchema()
        {
            PaymentType = "PaymentType",
            Provider = "Provider",
            FullName = "FullName",
            CVV = 0,
            Number = "Creditcardnumber",
            ExpiryDate = "ExpiryDate",
        };

        var entity = new CustomerCardEntity()
        {
            CustomerId = Guid.NewGuid().ToString(),
            PaymentType = "PaymentType",
            Provider = "Provider",
            FullName = "FullName",
            CVV = 0,
            Number = "Creditcardnumber",
            ExpiryDate = "ExpiryDate",
            Money = 0,
        };

        var response = new ServiceResponse<CreditCardDto>()
        {
            StatusCode = StatusCode.Created,
            Content = entity
        };

        var request = new ServiceRequest<AddCreditCardSchema> { Content = schema };

        _creditCardServiceMock.Setup(x => x.CreateAsync(It.IsAny<ServiceRequest<AddCreditCardSchema>>(), It.IsAny<string>())).ReturnsAsync(response);

        var result = await _creditCardServiceMock.Object.CreateAsync(request, userId);

        Assert.NotNull(result);
        Assert.Equal(StatusCode.Created, result.StatusCode);
    }
}
