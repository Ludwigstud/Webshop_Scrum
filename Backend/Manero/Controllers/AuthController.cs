using Manero.Models.Schemas;
using Manero.Services;
using Microsoft.AspNetCore.Mvc;

namespace Manero.Controllers
{
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
            if (ModelState.IsValid)
            {

                bool result = await _authService.SignUpAsync(schema);

                if (result)
                {
                    return Created("", null!);
                }
            }

            return BadRequest();
        }
        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(SignInSchema schema)
        {
            if (ModelState.IsValid)
            {
                string result = await _authService.SignInAsync(schema);

                if(result != null)
                    return Ok(result);

                return Problem();
            }
            return BadRequest();
        }
     
    }
}
