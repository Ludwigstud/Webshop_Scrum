using Manero.Models.Entities;

namespace Manero.Models.dto
{
    public class CustomerAddress
    {
        public int AddressId { get; set; }
        public AddressEntity Address { get; set; } = null!;
        public string CustomerId { get; set; } = null!;
        public CustomerEntity Customer { get; set; } = null!;
    }
}
