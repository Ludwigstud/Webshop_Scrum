namespace Manero.Models.dto
{
    public class EditAddress
    {
        public Address NewAddress { get; set; } = null!;
        public Address CurrentAddress { get; set; } = null!;
    }
}
