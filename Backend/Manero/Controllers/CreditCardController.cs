﻿using Manero.Interfaces;
using Manero.Models;
using Manero.Models.Schemas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Manero.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CreditCardController : ControllerBase
{
    private readonly ICreditCardService _creditCardService;

    public CreditCardController(ICreditCardService creditCardService)
    {
        _creditCardService = creditCardService;
    }



    [HttpPost("AddCreditCard")]
    public async Task<IActionResult> Create(AddCreditCardSchema schema)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (ModelState.IsValid)
        {
            

            if (userId == null)
                return NotFound();
            var request = new ServiceRequest<AddCreditCardSchema> { Content = schema };
            var response = await _creditCardService.CreateAsync(request, userId);

            if (response.Content != null)
            {
                return StatusCode((int)response.StatusCode, response);
            }
            else
            {
                return Conflict();
            }
        }
        else { return Conflict(); }
    }

}
