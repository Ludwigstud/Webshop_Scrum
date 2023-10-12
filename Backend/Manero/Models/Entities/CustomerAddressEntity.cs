namespace Manero.Models.Entities;

public class CustomerAddressEntity
{
    public int Id { get; set; }
    public int AddressId { get; set; }
    public AddressEntity Address { get; set; } = null!;
    public string CustomerId { get; set; } = null!;
    public CustomerEntity Customer { get; set; } = null!;
}
