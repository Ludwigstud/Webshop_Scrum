using MailKit.Net.Smtp;
using MailKit.Security;
using Manero.Interfaces;
using Manero.Models.dto;
using MimeKit;
using MimeKit.Text;

namespace Manero.Services;

public class EmailService : IEmailService
{
    private readonly IConfiguration _config;

    public EmailService(IConfiguration config)
    {
        _config = config;
    }

    public async Task SendEmail(EmailDto request)
    {
        var email = new MimeMessage();
        email.From.Add(MailboxAddress.Parse(_config.GetSection("EmailHandler").GetValue<string>("UserName")));
        email.To.Add(MailboxAddress.Parse(request.To));
        email.Subject = request.Subject;
        email.Body = new TextPart(TextFormat.Html) { Text = request.Body };

        using (var smtp = new SmtpClient())
        {
            try {
                await smtp.ConnectAsync(_config.GetSection("EmailHandler").GetValue<string>("Host"), 587, SecureSocketOptions.StartTls);
                await smtp.AuthenticateAsync(_config.GetSection("EmailHandler").GetValue<string>("UserName"), _config.GetSection("EmailHandler").GetValue<string>("Password"));
                await smtp.SendAsync(email);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex.Message}");
            }
            finally
            {
                await smtp.DisconnectAsync(true);
            }
        }
    }
}
