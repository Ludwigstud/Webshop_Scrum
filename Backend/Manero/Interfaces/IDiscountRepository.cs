namespace Manero.Interfaces
{
    public interface IDiscountRepository<TEntity> where TEntity : class
    {
        Task<TEntity> AddAsync(TEntity entity);
        Task<TEntity> DeleteAsync(Guid id);
        Task<IEnumerable<TEntity>> GetAllAsync();
    }
}
