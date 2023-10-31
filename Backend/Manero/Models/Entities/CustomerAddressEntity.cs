using Manero.Models.dto;

namespace Manero.Models.Entities;

public class CustomerAddressEntity
{
    public int Id { get; set; }
    public int AddressId { get; set; }
    public AddressEntity Address { get; set; } = null!;
    public string CustomerId { get; set; } = null!;
    public CustomerEntity Customer { get; set; } = null!;

    public static implicit operator CustomerAddressEntity(CustomerAddress customerAddress)
    {
        try
        {
            return new CustomerAddressEntity
            {
                AddressId = customerAddress.AddressId,
                CustomerId = customerAddress.CustomerId,
            };
        }
        catch
        {
            return null!;
        }
    }
}
