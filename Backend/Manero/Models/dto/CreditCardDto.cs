namespace Manero.Models.dto;

public class CreditCardDto
{
    public int Id { get; set; }
    public string? PaymentType { get; set; }
    public string? Provider { get; set; }
    public string FullName { get; set; } = null!;
    public string Number { get; set; } = null!;
    public int Money { get; set; }
    public string ExpiryDate { get; set; } = null!;
    public int CVV { get; set; }
}
