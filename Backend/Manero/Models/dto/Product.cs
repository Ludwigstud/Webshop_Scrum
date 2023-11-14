using Manero.Models.Entities;

namespace Manero.Models.dto;




public class Product
{

    public int Id { get; set; }
    public string ProductName { get; set; } = null!;
    public int Price { get; set; }
    public string Description { get; set; } = null!;

    public string? ImageUrl { get; set; }


}
