using Manero.Models.Contexts;
using Manero.Models.Entities;
using Microsoft.AspNetCore.Identity;

namespace Manero.Repos;

public class CustomerCardRepo : MainRepository<CustomerCardEntity>
{
    public CustomerCardRepo(DataContext context) : base(context)
    {
    }
}
