using Manero.Helpers;
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

    public AuthController(AuthService authService)
    {

        _authService = authService;

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
}
