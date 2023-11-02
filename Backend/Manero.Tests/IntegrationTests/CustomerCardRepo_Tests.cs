using Manero.Models.Contexts;
using Manero.Models.Entities;
using Manero.Repos;
using Microsoft.EntityFrameworkCore;

namespace Manero.Tests.IntegrationTests;

public class CustomerCardRepo_Tests
{
    private readonly DataContext _context;
    private readonly CustomerCardRepo _customerCardRepo;

    public CustomerCardRepo_Tests()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;

        _context = new DataContext(options);
        _customerCardRepo = new CustomerCardRepo(_context);
    }


    [Fact]
    public async Task CreateAsync_Should_AddEntityToDatase_And_ReturnEntity()
    {
        var entity = new CustomerCardEntity
        {
            CustomerId = Guid.NewGuid().ToString(),
            PaymentType = "CreditCard",
            Provider = "Visa",
            FullName = "Dennis Frölander",
            CVV = 901,
            Number = "3214 3412 1231 2131",
            ExpiryDate = "12/12",
            Money = 2000,
        };

        var result = await _customerCardRepo.CreateAsync(entity);

        Assert.NotNull(result);
        Assert.IsType<CustomerCardEntity>(result);
        Assert.Equal(entity.FullName, result.FullName);

    }

}
