namespace Manero.Models.Entities;

public class OrderEntity
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public int DeliveryId { get; set; }
    public DeliveryEntity Delivery { get; set; } = null!;
    public string CustomerId { get; set; } = null!;
    public CustomerEntity Customer { get; set; } = null!;
    public ICollection<OrderProductEntity> Products { get; set; } = new HashSet<OrderProductEntity>();
}
