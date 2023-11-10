using Manero.Models.Entities;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace Manero.Models.Schemas;

public class SignUpSchema
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set;} = null!;
    [DataType(DataType.EmailAddress)]
    public string Email { get; set; } = null!;
    [DataType(DataType.Password)]
    public string Password { get; set; } = null!;


    public static implicit operator IdentityUser(SignUpSchema schema)
    {
        return new IdentityUser
        {
            Email = schema.Email,
            UserName = schema.Email,
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
