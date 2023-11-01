using Manero.Models.dto;


namespace Manero.Models.Entities;

public class CustomerCardEntity
{
    public int Id { get; set; }
    public string? PaymentType { get; set; }
    public string? Provider {  get; set; }
    public string FullName { get; set; } = null!;
    public int CVV { get; set; }
    public string Number { get; set; } = null!;
    public int Money { get; set; }
    public string ExpiryDate { get; set; } = null!;
    public string CustomerId { get; set; } = null!;
    public CustomerEntity Customer { get; set; } = null!;

    public static implicit operator CreditCardDto(CustomerCardEntity entity)
    {
        return new CreditCardDto
        {
            Id = entity.Id,
            PaymentType = entity.PaymentType,
            Provider = entity.Provider,
            FullName = entity.FullName,
            Number = entity.Number,
            Money = entity.Money,
            ExpiryDate = entity.ExpiryDate,
            CVV = entity.CVV,
        };
    }

}
