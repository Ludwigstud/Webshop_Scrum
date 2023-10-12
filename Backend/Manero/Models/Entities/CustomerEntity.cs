using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Manero.Models.Entities;

public class CustomerEntity
{
    [Key, ForeignKey(nameof(User))]
    public string Id { get; set; } = null!;
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string? PhoneNumber { get; set; }
    public string? ProfileImage {  get; set; }
    public IdentityUser User { get; set; } = null!;
    public ICollection<CustomerCardEntity> Cards { get; set; } = new HashSet<CustomerCardEntity>();
    public ICollection<ReviewEntity> Reviews { get; set; } = new HashSet<ReviewEntity>();
    public ICollection<OrderEntity> Orders { get; set; } = new HashSet<OrderEntity>();
    public ICollection<CustomerAddressEntity> Addresses { get; set; } = new HashSet<CustomerAddressEntity>();
}
