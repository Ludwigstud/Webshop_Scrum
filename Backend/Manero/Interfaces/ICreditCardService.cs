using Manero.Models;
using Manero.Models.dto;
using Manero.Models.Schemas;

namespace Manero.Interfaces;

public interface ICreditCardService
{
    Task<ServiceResponse<CreditCardDto>> CreateAsync(ServiceRequest<AddCreditCardSchema> request, string userId);
}
