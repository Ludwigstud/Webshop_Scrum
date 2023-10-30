using Manero.Models.Entities;

namespace Manero.Models.dto
{
    public class Address
    {
        public string StreetName { get; set; } = null!;
        public int PostalCode { get; set; }
        public string City { get; set; } = null!;

        public static implicit operator AddressEntity(Address address)
        {
            return new AddressEntity
            {
                StreetName = address.StreetName,
                City = address.City,
                PostalCode = address.PostalCode,

            };
        }
    }
}
