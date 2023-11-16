namespace Manero.Models.Entities;
public class Product
{
	public int Id { get; set; }
	public string Name { get; set; } = null!;
	public decimal Price { get; set; }
	public string Size { get; set; } = null!;
	public string Color { get; set; } = null!;
	public string ImageUrl { get; set; } = null!;
}

public class CartItem
{
	public int Id { get; set; }
	public int ProductId { get; set; }
	public int Quantity { get; set; }
}

public class Cart
{
	public List<CartItem> Items { get; set; } = null!;
}
