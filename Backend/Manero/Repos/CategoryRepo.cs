using Manero.Models.Contexts;
using Manero.Models.Entities;

namespace Manero.Repos
{
    public class CategoryRepo: MainRepository<CategoryEntity>
    {
        public CategoryRepo(DataContext context) : base(context)
        {

        }
    }
}
