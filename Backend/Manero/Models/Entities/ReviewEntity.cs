namespace Manero.Models.Entities;

public class ReviewEntity
{
    public int Id { get; set; }
    public string Description { get; set; } = null!;
    public int Rating { get; set; }
    public DateTime? CreatedDate { get; set; }
    public int ProductId { get; set; }
    public ProductEntity Product { get; set; } = null!;
    public string CustomerId { get; set; } = null!;
    public CustomerEntity Customer { get; set; } = null!;

}
