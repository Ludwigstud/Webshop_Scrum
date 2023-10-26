namespace Manero.Models.DTO
{
    public class UserToken
    {
        public string? Token { get; set; }

        public static implicit operator UserToken(string? token)
        {

            return new UserToken { Token = token };
        }
    }
}
