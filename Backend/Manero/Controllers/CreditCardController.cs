using Manero.Interfaces;
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
    [Authorize]
    public async Task<IActionResult> Create(AddCreditCardSchema schema)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (ModelState.IsValid)
        {
            if (userId == null)
                return NotFound();
            var request = new ServiceRequest<AddCreditCardSchema> { Content = schema };
            var response = await _creditCardService.CreateAsync(request, userId);

            if (response != null)
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

    
    [HttpGet("GetAllCreditCard")]
    [Authorize]
    public async Task<IActionResult> GetAll()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if(userId == null)
            return NotFound();

        var request = new ServiceRequest<string> { Content = userId };
        var response = await _creditCardService.GetAllAsync(request);
        if (response != null)
        {
            return StatusCode((int)response.StatusCode, response);
        }
       else
        {
            return NotFound();
        }
    }

    [HttpGet]
    [Authorize]
    [Route("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (userId == null)
            return NotFound();


        var request = new ServiceRequest<(int, string)> { Content = (id, userId) };
        var response = await _creditCardService.GetAsync(request);
        if(response.Content != null)
        {
            return StatusCode((int)response.StatusCode, response);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpDelete]
    [Authorize]
    [Route("{id}")]
    public async Task<IActionResult> DeleteById([FromRoute] int id)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (userId == null)
            return NotFound();

        var request = new ServiceRequest<(int, string)> { Content= (id, userId) };
        var response = await _creditCardService.DeleteAsync(request);
        if(response.Content == true)
        {
            return StatusCode((int)response.StatusCode, response);
        }
        else { return NotFound(); }
    }
}
