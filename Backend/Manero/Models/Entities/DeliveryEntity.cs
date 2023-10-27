namespace Manero.Models.Entities;

public class DeliveryEntity
{
    public int Id { get; set; }
    public string PostalService { get; set; } = null!;
    public string Status { get; set; } = null!;
}
