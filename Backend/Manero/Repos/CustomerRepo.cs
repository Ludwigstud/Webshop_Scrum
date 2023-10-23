using Manero.Models.Contexts;
using Manero.Models.Entities;

namespace Manero.Repos
{
    public class CustomerRepo : MainRepository<CustomerEntity>
    {
        public CustomerRepo(DataContext context) : base(context)
        {
        }
    }
}
