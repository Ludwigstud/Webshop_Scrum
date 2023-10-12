namespace Manero.Models.Entities;

public class DiscountEntity
{
    public int Id { get; set; }

    public string DiscountName { get; set; } = null!;
    public int Discount {  get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }
    public DateTime? ExpiringDate { get; set; }
    public ICollection<ProductEntity> Products { get; set; } = null!;

}
