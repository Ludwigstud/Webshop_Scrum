﻿using Manero.Enums;
using Manero.Interfaces;
using Manero.Models;
using Manero.Models.dto;
using Manero.Models.Entities;
using Manero.Models.Schemas;
using Manero.Repos;

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
                response.StatusCode = StatusCode.BadRequest;
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

    public async Task<ServiceResponse<CreditCardDto>> GetAsync(ServiceRequest<(int, string)> request)
    {
        var response = new ServiceResponse<CreditCardDto>();
        var creditCard = await _customerCardRepo.GetAsync(x => x.Id == request.Content.Item1 && x.CustomerId == request.Content.Item2);
        if (creditCard != null)
        {
            response.Content = creditCard;
            response.StatusCode = StatusCode.Ok;
        }
        else
        {
            response.Content = null;
            response.StatusCode = StatusCode.BadRequest;
        }
        return response;
    }

    public async Task<ServiceResponse<List<CreditCardDto>>> GetAllAsync(ServiceRequest<string> request)
    {
        var response = new ServiceResponse<List<CreditCardDto>>();
        var creditCardList = new List<CreditCardDto>();
        if (request.Content != null)
        {
            var creditCards = await _customerCardRepo.GetAllAsync(x => x.CustomerId == request.Content);
            if(creditCards != null)
            {
                foreach (var creditcard in creditCards)
                {
                    creditCardList.Add(creditcard);
                }
                response.Content = creditCardList;
                response.StatusCode = StatusCode.Ok;
            }
            else
            {
                response.Content = null;
                response.StatusCode = StatusCode.Ok;
            }
        }
        else
        {
            response.Content = null;
            response.StatusCode = StatusCode.BadRequest;
        }
        return response;
    }

    public async Task<ServiceResponse<bool>> DeleteAsync(ServiceRequest<(int, string)> request)
    {
        var response = new ServiceResponse<bool>();
        var creditCard = await _customerCardRepo.GetAsync(x => x.Id == request.Content.Item1 && x.CustomerId == request.Content.Item2);
        if (creditCard != null)
        {
            var result = await _customerCardRepo.DeleteAsync(x => x.Id == creditCard.Id && x.CustomerId == creditCard.CustomerId);
            if (result)
            {
                response.Content = true;
                response.StatusCode = StatusCode.Ok;
            }
            else
            {
                response.Content = false;
                response.StatusCode = StatusCode.BadRequest;
            }
        }
        else
        {
            response.Content = false;
            response.StatusCode = StatusCode.BadRequest;
        }
        return response;
    }
}

