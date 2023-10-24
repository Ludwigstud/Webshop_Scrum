using Manero.Models;
using Manero.Models.DTO;
using Manero.Models.Schemas;

namespace Manero.Interfaces
{
    public interface IAuthService
    {
        Task<ServiceResponse<UserToken>> SignInAsync(ServiceRequest<SignInSchema> request);
    }
}
