using Manero.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Manero.Models.Entities;
using Manero.Models.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

[Route("api/products")]
[ApiController]
public class ProductsController : ControllerBase
{
	private readonly List<Product> products = new List<Product>
	{
		new Product { Id = 1, Name = "Product 1", Price = 10.99, Size = "M", Color = "Blue", ImageUrl = "product1.jpg" },
		new Product { Id = 2, Name = "Product 2", Price = 19.99, Size = "L", Color = "Red", ImageUrl = "product2.jpg" }
        // lägg till mer produkter
    };

	[HttpGet]
	public ActionResult<IEnumerable<Product>> GetProducts()
	{
		return Ok(products);
	}

	[HttpGet("{id}")]
	public ActionResult<Product> GetProduct(int id)
	{
		var product = products.Find(p => p.Id == id);
		if (product == null)
		{
			return NotFound();
		}
		return Ok(product);
	}
}

[Route("api/cart")]
[ApiController]
public class CartController : ControllerBase
{
	private readonly Cart cart = new Cart { Items = new List<CartItem>() };

	[HttpGet]
	public ActionResult<Cart> GetCart()
	{
		return Ok(cart);
	}

	[HttpPost("add-to-cart")]
	public ActionResult AddToCart([FromBody] CartItem item)
	{
		var product = products.Find(p => p.Id == item.ProductId);
		if (product == null)
		{
			return NotFound("Product not found");
		}
		cart.Items.Add(item);
		return Ok();
	}

	[HttpPut("update-quantity")]
	public ActionResult UpdateQuantity([FromBody] CartItem item)
	{
		var existingItem = cart.Items.Find(ci => ci.ProductId == item.ProductId);
		if (existingItem == null)
		{
			return NotFound("Item not found in the cart");
		}
		existingItem.Quantity = item.Quantity;
		return Ok();
	}

	[HttpDelete("remove-from-cart/{productId}")]
	public ActionResult RemoveFromCart(int productId)
	{
		var itemToRemove = cart.Items.Find(ci => ci.ProductId == productId);
		if (itemToRemove == null)
		{
			return NotFound("Item not found in the cart");
		}
		cart.Items.Remove(itemToRemove);
		return Ok();
	}
}

