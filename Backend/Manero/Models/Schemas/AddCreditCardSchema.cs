using Manero.Models.Entities;
using System.ComponentModel.DataAnnotations;

namespace Manero.Models.Schemas;

public class AddCreditCardSchema
{
    public string? PaymentType { get; set; }

    public string? Provider { get; set; }
    public string FullName { get; set; } = null!;
    public string Number { get; set; } = null!;
    public int CVV { get; set; }
    public string ExpiryDate { get; set; } = null!;

    public static implicit operator CustomerCardEntity(AddCreditCardSchema schema)
    {
        return new CustomerCardEntity
        {
            PaymentType = schema.PaymentType,
            Provider = schema.Provider,
            FullName = schema.FullName,
            Number = schema.Number,
            ExpiryDate = schema.ExpiryDate,
            CVV = schema.CVV,
        };
    }
}
