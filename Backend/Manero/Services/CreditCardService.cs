using Manero.Enums;
using Manero.Interfaces;
using Manero.Models;
using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.Entities;
using Manero.Models.Schemas;
using Manero.Repos;
using System.Globalization;

namespace Manero.Services;
public class CreditCardService : ICreditCardService
{
    private readonly CustomerCardRepo _customerCardRepo;

    public CreditCardService( CustomerCardRepo customerCardRepo)
    {
        _customerCardRepo = customerCardRepo;
    }

    public async Task<ServiceResponse<CreditCardDto>> CreateAsync(ServiceRequest<AddCreditCardSchema> request, string userId)
    {
        var response = new ServiceResponse<CreditCardDto>();

        if (request.Content != null)
        {
            CustomerCardEntity customerCard = request.Content;

            customerCard.Money = 2000;
            customerCard.CustomerId = userId;

            var result = await _customerCardRepo.CreateAsync(customerCard);
            if (result != null)
            {
                response.StatusCode = StatusCode.Created;
                response.Content = customerCard;
            }
            else
            {
                response.StatusCode = StatusCode.InternalServerError;
                response.Content = null!;
            }
        }
        else
        {
            response.StatusCode = StatusCode.BadRequest;
            response.Content = null!;
        }

        return response;
    }
}

