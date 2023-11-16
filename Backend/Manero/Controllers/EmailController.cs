using Manero.Interfaces;
using Manero.Models.dto;
using Manero.Models.Schemas;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Manero.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EmailController : ControllerBase
{
    private readonly IEmailService _emailService;
    private readonly UserManager<IdentityUser> _userManager;

    public EmailController(IEmailService emailService, UserManager<IdentityUser> userManager)
    {
        _emailService = emailService;
        _userManager = userManager;
    }

    [HttpPost("resetpassword")]
    public async Task<IActionResult> ResetPasswordAsync(ResetEmailSchema schema)
    {
        var user = await _userManager.FindByEmailAsync(schema.Email);
        if (user != null)
        {
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);

            var encodedToken = Uri.EscapeDataString(token);
            var forgotPasswordLink = $"http://localhost:3000/updatepassword?token={encodedToken}&email={user.Email}";



            EmailDto emailDto = new EmailDto();
            emailDto.To = user.Email!;
            emailDto.Subject = "Forgot password Link";
            emailDto.Body = $@"
                <p>Dear {user.Email},</p>
                <p>We received a request to reset your password. Please click the link below to reset your password:</p>
                <a href='{forgotPasswordLink}'>Reset Password</a>
                <p>If you did not request a password reset, please ignore this email.</p>
                ";
            await _emailService.SendEmail(emailDto);
            return Ok();
        }
        else
        {
            return BadRequest();
        }
    }

    [HttpPost("updatePassword")]
    public async Task<IActionResult> UpdatePasswordAsync([FromBody] PasswordUpdateDto model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
            return BadRequest("Invalid email address");
        }

        var result = await _userManager.ResetPasswordAsync(user, model.Token, model.NewPassword);
        if (result.Succeeded)
        {
            return Ok("Password updated successfully");
        }
        else
        {
            return BadRequest("Failed to update password");
        }
    }
}

