﻿namespace Manero.Models.Entities;

public class ProductEntity
{
    public int Id { get; set; }
    public string ProductName { get; set; } = null!;
    public int Price { get; set; }
    public string Description { get; set; } = null!;

    public CategoryEntity Category { get; set; } = null!;
    public int CategoryId { get; set; }
    public DiscountEntity Discount { get; set; } = null!;
    public int DiscountId { get; set; }
}
