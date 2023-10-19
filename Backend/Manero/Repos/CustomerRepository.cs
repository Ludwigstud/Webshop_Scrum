using Manero.Models.Contexts;
using Manero.Models.Entities;

namespace Manero.Repos
{
    public class CustomerRepository : MainRepository<CustomerEntity>
    {
        public CustomerRepository(DataContext context) : base(context)
        {
        }
    }
}
