using System.Globalization;

namespace Manero.Models.Entities;

public class CustomerCardEntity
{
    public int Id { get; set; }
    public string? PaymentType { get; set; }
    public string? Provider {  get; set; }
    public string Name { get; set; } = null!;
    public int Number {  get; set; }
    public int Money { get; set; }
    public DateTime ExpiryDate { get; set; }
    public string CustomerId { get; set; } = null!;
    public CustomerEntity Customer { get; set; } = null!;

}
