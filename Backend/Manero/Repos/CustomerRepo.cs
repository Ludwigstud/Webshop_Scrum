using Manero.Models.Contexts;
using Manero.Models.Entities;
using Microsoft.AspNetCore.Identity;

namespace Manero.Repos
{
    public class CustomerRepo : MainRepository<IdentityUser>
    {
        public CustomerRepo(DataContext context) : base(context)
        {
        }
    }
}
