using Manero.Interfaces;
using Manero.Models.Entities;
using Manero.Models.Schemas;
using Manero.Repos;
using System.Diagnostics;

namespace Manero.Services
{
    public class DiscountService : IDiscountService
    {
        private readonly IDiscountRepo _discRepo;

        public DiscountService(IDiscountRepo discRepo)
        {
            _discRepo = discRepo;
        }

        public async Task<DiscountEntity> CreateAsync(DiscountSchema dCshema)
        {
            try
            {
                if (dCshema != null)
                {
                    var discountEntity = new DiscountEntity
                    {
                        DiscountName = dCshema.DiscountName,
                        Discount = dCshema.Discount,
                        ExpiringDate = dCshema.ExpiringDate
                    };

                    return await _discRepo.AddAsync(discountEntity);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }

            return null!;
        }


        public async Task<IEnumerable<DiscountEntity>> GetAllAsync()
        {
            try
            {
                return await _discRepo.GetAllAsync();
            }
            catch (Exception ex) { Debug.WriteLine(ex.Message); }
            return null!;
        }

        public async Task<DiscountEntity> DeleteAsync(Guid id)
        {
            try
            {
                return await _discRepo.DeleteAsync(id);
            }
            catch (Exception ex) { Debug.WriteLine(ex.Message); }
            return null!;
        }

       
    }
}
