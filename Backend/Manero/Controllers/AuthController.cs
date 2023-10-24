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
    private readonly AuthService _authService;
    private readonly IAuthService _iAuthService;
    public AuthController(AuthService authService, IAuthService iAuthService)
    {

        _authService = authService;
        _iAuthService = iAuthService;
    }

    [HttpPost("SignUp")]
    public async Task<IActionResult> SignUp(SignUpSchema schema)
    {
        if(ModelState.IsValid)
        {

            bool signUpSuccess = await _authService.SignUpAsync(schema);

            if (signUpSuccess)
            {
                return Created("", null!);
            }
            else
            {
                return Conflict();
            }
        }

        return BadRequest();
    }

    [HttpPost("SignIn")]
    public async Task<IActionResult> SignIn(SignInSchema schema)
    {
        if (ModelState.IsValid)
        {
            var token = await _authService.SignInAsync(schema);
            if(token != null)
            {
                return Ok(token);
            }
            return Problem();
        }
        return BadRequest();
    }


    [HttpPost("SignInNew")]
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
