using Manero.Models;
using Manero.Models.dto;
using Manero.Models.Schemas;

namespace Manero.Interfaces;

public interface ICreditCardService
{
    Task<ServiceResponse<CreditCardDto>> CreateAsync(ServiceRequest<AddCreditCardSchema> request, string userId);

    Task<ServiceResponse<List<CreditCardDto>>> GetAllAsync(ServiceRequest<string> request);
    Task<ServiceResponse<CreditCardDto>> GetAsync(ServiceRequest<(int, string)> request);
    Task<ServiceResponse<bool>> DeleteAsync(ServiceRequest<(int, string)> request);
}
