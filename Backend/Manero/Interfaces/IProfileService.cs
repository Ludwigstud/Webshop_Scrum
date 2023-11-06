using Manero.Models;
using Manero.Models.dto;

namespace Manero.Interfaces
{
    public interface IProfileService
    {
        Task<ServiceResponse<Profile>> GetProfile(string userId);
        Task<ServiceResponse<Profile>> GetProfileAddressesAsync(string userId);
        Task<ServiceResponse<EditAddress>> UpdateProfileAddressAsync(EditAddress editAddress, string userId);

        Task<ServiceResponse<Address>> CreateAddressAsync(Address address, string userId);
        Task<ServiceResponse<CustomerAddress>> DeleteAddressAsync(Address address, string userId);
    }
}
