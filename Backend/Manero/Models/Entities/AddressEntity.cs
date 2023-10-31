using Manero.Models.dto;

namespace Manero.Models.Entities;

public class AddressEntity
{
    public int Id { get; set; }
    public string StreetName { get; set; } = null!;
    public int PostalCode { get; set; }
    public string City { get; set; } = null!;
    public ICollection<CustomerAddressEntity> Customers { get; set; } = new HashSet<CustomerAddressEntity>();

    public int AddressTagId { get; set; }

    public AddressTagEntity AddressTag { get; set; } = null!;

    public static implicit operator Address(AddressEntity entity)
    {
        return new Address
        {
            StreetName = entity.StreetName,
            City = entity.City,
            PostalCode = entity.PostalCode,
        };
    }
}
