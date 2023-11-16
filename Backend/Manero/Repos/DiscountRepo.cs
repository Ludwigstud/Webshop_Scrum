using Manero.Interfaces;
using Manero.Models.Contexts;
using Manero.Models.Entities;

namespace Manero.Repos
{
    public class DiscountRepo : DiscountRepository<DiscountEntity>, IDiscountRepo
    {
        public DiscountRepo(DataContext context) : base(context)
        { 
        }
    }
}
