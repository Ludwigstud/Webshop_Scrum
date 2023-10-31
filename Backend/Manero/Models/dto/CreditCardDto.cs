namespace Manero.Models.dto;

public class CreditCardDto
{
    public string? PaymentType { get; set; }
    public string? Provider { get; set; }
    public string FullName { get; set; } = null!;
    public int Number { get; set; }
    public int Money { get; set; }
    public string ExpiryDate { get; set; } = null!;
    public int CVV { get; set; }
}
