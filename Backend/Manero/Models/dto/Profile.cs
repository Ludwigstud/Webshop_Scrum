namespace Manero.Models.dto;

public class Profile
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = null!;

    public List<Address>? Address { get; set; }
}
