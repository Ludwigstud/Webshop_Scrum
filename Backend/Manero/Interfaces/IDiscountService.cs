using Manero.Models.Entities;
using Manero.Models.Schemas;

namespace Manero.Interfaces
{
    public interface IDiscountService
    {
        Task<DiscountEntity> CreateAsync(DiscountSchema dCshema);
        Task<DiscountEntity> DeleteAsync(Guid id);
        Task<IEnumerable<DiscountEntity>> GetAllAsync();
    }
}
