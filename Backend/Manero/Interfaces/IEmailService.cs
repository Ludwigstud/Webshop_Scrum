using Manero.Models.dto;

namespace Manero.Interfaces;

public interface IEmailService
{
    Task SendEmail(EmailDto request);
}
