using Manero.Models.Contexts;
using Manero.Models.Entities;

namespace Manero.Repos
{
    public class CustomerAddressRepo : MainRepository<CustomerAddressEntity>
    {
        public CustomerAddressRepo(DataContext context) : base(context)
        {
        }
    }
}
