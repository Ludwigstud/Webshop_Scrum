﻿namespace Manero.Models.Entities;

public class OrderProductEntity
{   
    public int Id { get; set; }
    public int ProductId { get; set; }
    public ProductEntity Product { get; set; } = null!;
    public int OrderId { get; set; }
    public OrderEntity Order { get; set; } = null!;
}
