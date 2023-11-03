using Manero.Models.Entities;

namespace Manero.Models.dto
{
    public class CustomerAddress
    {
        public int AddressId { get; set; }
        public AddressEntity Address { get; set; } = null!;
        public string CustomerId { get; set; } = null!;
        public CustomerEntity Customer { get; set; } = null!;
        public int AddressTagId { get; set; }
        public AddressTagEntity AddressTag { get; set; } = null!;

        public static implicit operator CustomerAddress(CustomerAddressEntity customerAddress)
        {
            return new CustomerAddressEntity()
            {
                AddressId = customerAddress.AddressId,
                CustomerId = customerAddress.CustomerId,
                AddressTagId = customerAddress.AddressTagId,
            };
        }
    }
}
