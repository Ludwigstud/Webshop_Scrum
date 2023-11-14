
using Manero.Models.dto;
using Manero.Models.Entities;
using Manero.Models.Schemas;

namespace Manero.Tests.UnitTests;

public class CustomerCardModels_Tests
{
    [Fact]
    public void AddCreditCardSchema_Should_ConvertTo_CustomerCardEntity()
    {
        //Arrange
        AddCreditCardSchema schema = new AddCreditCardSchema()
        {
            PaymentType = "Creditcard",
            Provider = "Mastercard",
            FullName = "Dennis Frölander",
            Number = "1234 1323 1232 1322",
            CVV = 123,
            ExpiryDate = "12/12",
        };

        //Act
        CustomerCardEntity entity = schema;

        //Assert
        Assert.NotNull(entity);
        Assert.IsType<CustomerCardEntity>(entity);
        Assert.Equal(schema.Number, entity.Number);
    }

    [Fact]
    public void CustomerCardEntity_Should_ConvertTo_CreditCardDto()
    {
        //Arrange

        CustomerCardEntity entity = new CustomerCardEntity()
        {
            PaymentType = "Creditcard",
            Provider = "Mastercard",
            FullName = "Dennis Frölander",
            Number = "1234 1323 1232 1322",
            CVV = 123,
            ExpiryDate = "12/12",
        };

        //Act
        CreditCardDto dto = entity;

        //Assert
        Assert.NotNull(dto);
        Assert.IsType<CreditCardDto>(dto);
        Assert.Equal(entity.Number, dto.Number);
        Assert.Equal(entity.Provider, dto.Provider);
        Assert.Equal(entity.PaymentType, dto.PaymentType);
        Assert.Equal(entity.FullName, dto.FullName);
        Assert.Equal(entity.CVV, dto.CVV);


    }
}
