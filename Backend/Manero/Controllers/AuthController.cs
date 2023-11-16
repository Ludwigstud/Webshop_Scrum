using Manero.Helpers;
using Manero.Interfaces;
using Manero.Models;
using Manero.Models.Contexts;
using Manero.Models.Schemas;
using Manero.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace Manero.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{

    private readonly IAuthService _iAuthService;
    public AuthController(IAuthService iAuthService)
    {
        _iAuthService = iAuthService;
    }

    


    [HttpPost("SignUp")]
    public async Task<IActionResult> SignUpNew(SignUpSchema schema)
    {
        if (ModelState.IsValid)
        {
            var request = new ServiceRequest<SignUpSchema> { Content = schema };
            var response = await _iAuthService.SignUpAsync(request);

            if (response.Content)
            {
                return StatusCode((int)response.StatusCode, response);
            }
            else
            {
                return Conflict();
            }
        }

        return BadRequest();
    }


    [HttpPost("SignIn")]
    public async Task<IActionResult> SignInNew(SignInSchema schema)
    {
        if (ModelState.IsValid)
        {
            var request = new ServiceRequest<SignInSchema> { Content = schema };
            var response = await _iAuthService.SignInAsync(request);
            if (response != null)
            {
                return StatusCode((int)response.StatusCode, response);
            }
            return Problem();
           
        }
        return BadRequest();
    }
}
