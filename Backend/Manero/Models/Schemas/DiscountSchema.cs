using Manero.Interfaces;
using Manero.Models.Entities;
using System.ComponentModel.DataAnnotations;

namespace Manero.Models.Schemas
{
    public class DiscountSchema : IDiscountSchema
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string DiscountName { get; set; } = null!;

        [Required]
        public int Discount { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
        public DateTime? ExpiringDate { get; set; }


        public static implicit operator DiscountEntity(DiscountSchema discountSchema)
        {
            if (discountSchema != null)
                return new DiscountEntity
                {
                    Id = discountSchema.Id,
                    DiscountName = discountSchema.DiscountName,
                    Discount = discountSchema.Discount,
                    CreatedAt = discountSchema.CreatedAt,
                    DeletedAt = discountSchema.DeletedAt,
                    ExpiringDate = discountSchema.ExpiringDate
                };

            return null!;
        }
    }
}
