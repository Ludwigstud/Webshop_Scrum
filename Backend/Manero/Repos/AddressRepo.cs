using Manero.Models.Contexts;
using Manero.Models.Entities;

namespace Manero.Repos
{
    public class AddressRepo : MainRepository<AddressEntity>
    {
        public AddressRepo(DataContext context) : base(context)
        { }
    }
}
