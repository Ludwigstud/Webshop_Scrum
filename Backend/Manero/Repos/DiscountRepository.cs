using Manero.Interfaces;
using Manero.Models.Contexts;
using Microsoft.EntityFrameworkCore;

namespace Manero.Repos
{
    public abstract class DiscountRepository<TEntity> : IDiscountRepository<TEntity> where TEntity : class
    {
        private readonly DataContext _context;

        protected DiscountRepository(DataContext context)
        {
            _context = context;
        }

        public virtual async Task<TEntity> AddAsync(TEntity entity)
        {
            if (entity != null)
            {
                _context.Set<TEntity>().Add(entity);
                await _context.SaveChangesAsync();
                return entity;
            }
            return null!;
        }


        public virtual async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _context.Set<TEntity>().ToListAsync();
        }

        public virtual async Task<TEntity> DeleteAsync(Guid id)
        {
            var entity = await _context.Set<TEntity>().FindAsync(id);

            if (entity != null)
            {
                _context.Set<TEntity>().Remove(entity);
                await _context.SaveChangesAsync();
                return entity;
            }
            return null!;
        }
    }
}
