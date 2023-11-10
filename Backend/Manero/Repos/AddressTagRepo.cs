using Manero.Models.Contexts;
using Manero.Models.Entities;

namespace Manero.Repos
{
    public class AddressTagRepo : MainRepository<AddressTagEntity>
    {
        public AddressTagRepo(DataContext context) : base(context)
        {
        }
    }
}
