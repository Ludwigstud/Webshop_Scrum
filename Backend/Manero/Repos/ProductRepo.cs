using Manero.Models.Contexts;
using Manero.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Manero.Repos
{
    public class ProductRepo: MainRepository<ProductEntity>
    {
        private new readonly DataContext _context;
        public ProductRepo(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProductEntity>> GetAllProductsAsync()
        {
            try
            {
                return await _context.Products.ToListAsync();
            }
            catch { return null!; }
        }
    }
}
