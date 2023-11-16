using Manero.Models.Contexts;
using Manero.Models.Entities;
using Microsoft.AspNetCore.Identity;

namespace Manero.Repos
{
    public class DiscountCodeRepo : MainRepository<IdentityUser>
    {
        public DiscountCodeRepo(DataContext context) : base(context)
        {
        }
    }
}
