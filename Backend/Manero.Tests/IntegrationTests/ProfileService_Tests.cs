using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.Entities;
using Manero.Repos;
using Manero.Services;
using Manero.Tests.Fakes;
using Microsoft.AspNetCore.Identity;


namespace Manero.Tests.IntegrationTests;

public class ProfileService_Tests : IClassFixture<DatabaseFixture>
{
    private readonly ProfileService _profileService;
    private readonly AddressRepo _addressRepo;
    private readonly AddressTagRepo _addressTagRepo;
    private readonly CustomerAddressRepo _customerAddressRepo;
    private readonly DatabaseFixture _fixture;

    public ProfileService_Tests(DatabaseFixture fixture)
    {
        _fixture = fixture;
        _addressRepo = new AddressRepo(_fixture.Context);
        _addressTagRepo = new AddressTagRepo(_fixture.Context);
        _customerAddressRepo = new CustomerAddressRepo(_fixture.Context);
        _profileService = new ProfileService(_fixture.Context, _addressTagRepo, _addressRepo, _customerAddressRepo);
    }

    private async Task SeedDummyData(DataContext context)
    {
       
        var identityUser = new IdentityUser()
        {
            Id = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8g",
            Email = "John@domain.com",
        };

        var user = new CustomerEntity()
        {
            Id = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8g",
            FirstName = "John",
            LastName = "Doe",
        };
        var addressTag = new AddressTagEntity()
        {
            Id = 1,
            TagName = "Home"
        };

        var address = new AddressEntity()
        {
            Id = 1,
            StreetName = "Testvägen 3",
            PostalCode = 33333,
            City = "Test",
            
        };

        var customerAddress = new CustomerAddressEntity()
        {
            Id = 1,
            CustomerId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8g",
            AddressId = 1,
            AddressTagId = 1,
        };
        await context.CustomerAdress.AddAsync(customerAddress);
        await context.Address.AddAsync(address);
        await context.Users.AddAsync(identityUser);
        await context.Customer.AddAsync(user);
        await context.AddressTags.AddAsync(addressTag);
        await context.SaveChangesAsync();
        
    }

    public void Dispose()
    {
        _fixture.Context.Address.RemoveRange(_fixture.Context.Address);
        _fixture.Context.Customer.RemoveRange(_fixture.Context.Customer);
        _fixture.Context.AddressTags.RemoveRange(_fixture.Context.AddressTags);
        _fixture.Context.CustomerAdress.RemoveRange(_fixture.Context.CustomerAdress);
        _fixture.Context.Users.RemoveRange(_fixture.Context.Users);
        _fixture.Context.SaveChanges();
    }

    [Fact]
    public async Task CreateAddressAsync_Should_Return201Response_WhenCreated()
    {
        var address = new Address() { StreetName = "Testgatan 4", PostalCode = 32324, City = "TestTown", AddressTag = "Home" };
        var userId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8g";
        await SeedDummyData(_fixture.Context);
        var profile = await _profileService.CreateAddressAsync(address, userId);
        Assert.Equal(profile?.StatusCode, Enums.StatusCode.Created);
        Assert.Equal(profile?.Content, address);
        Dispose();
    }
    [Fact]
    public async Task GetProfileAddressesAsync_Should_Return200Response_WhenSucceeded()
    {
        var address = new Address()
        {
            AddressTag = "Home",
            City = "Test",
            PostalCode = 33333,
            StreetName = "Testvägen 3",
        };
        await SeedDummyData(_fixture.Context);
        var userId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8g";
        var result = await _profileService.GetProfileAddressesAsync(userId);

        Assert.Equal(result?.StatusCode, Enums.StatusCode.Ok);
        Assert.Equal(result?.Content?.Address[0].StreetName, address.StreetName);
        Dispose();
    }
    [Fact]
    public async Task UpdateProfileAddressAsync_Should_Return200Response_WhenSuccessfullyUpdated()
    {
        var editAddress = new EditAddress()
        {
            CurrentAddress = new Address()
            {
                AddressTag = "Home",
                City = "Test",
                PostalCode = 33333,
                StreetName = "Testvägen 3"
            },
            NewAddress = new Address()
            {
                AddressTag = "Home",
                City = "TestNewCity",
                PostalCode = 44444,
                StreetName = "Testgatan 2"
            }
        };
        await SeedDummyData(_fixture.Context);
        var userId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8g";

        var result = await _profileService.UpdateProfileAddressAsync(editAddress, userId);

        Assert.Equal(result?.StatusCode, Enums.StatusCode.Ok);
        Assert.Equal(result?.Content?.NewAddress.StreetName, editAddress.NewAddress.StreetName);
        Dispose();
    }
    [Fact]
    public async Task GetProfileAsync_Should_Return200Response_WhenSuccessfullyUpdated()
    {
        await SeedDummyData(_fixture.Context);
        var userId = "31d7f0b3-5b29-475f-83a4-9b62b0f87c8g";

        var result = await _profileService.GetProfileAsync(userId);
        Assert.Equal(Enums.StatusCode.Ok,result?.StatusCode);
        Assert.Equal("John@domain.com", result?.Content?.Email!);

        Dispose();
    }
}
