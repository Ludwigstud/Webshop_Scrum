using Manero.Models.Entities;
using Microsoft.AspNetCore.Identity;

namespace Manero.Models.Schemas
{
    public class SignUpSchema
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;

        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;

        public static implicit operator IdentityUser(SignUpSchema schema)
        {
            return new IdentityUser
            {
                UserName = schema.Email,
                Email = schema.Email,


            };
        }
        public static implicit operator CustomerEntity(SignUpSchema schema)
        {
            return new CustomerEntity
            {
                FirstName = schema.FirstName,
                LastName = schema.LastName,

            };
        }
    }
}
