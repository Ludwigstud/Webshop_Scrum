using Manero.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Manero.Repos.DataSeeder;
using Microsoft.AspNetCore.Identity;

namespace Manero.Models.Contexts;

public class DataContext : IdentityDbContext<IdentityUser>
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    public DbSet<CustomerEntity> Customer { get; set; }
    public DbSet<AddressEntity> Address { get; set; }
    public DbSet<CustomerAddressEntity> CustomerAdress { get; set; }
    public DbSet<CustomerCardEntity> CustomerCard { get; set; }
    public DbSet<OrderEntity> Orders { get; set; }
    public DbSet<DeliveryEntity> Delivery { get; set; }
    public DbSet<ReviewEntity> Reviews { get; set; }
    public DbSet<ProductEntity> Products { get; set; }
    public DbSet<OrderProductEntity> OrderProduct { get; set; }
    public DbSet<CategoryEntity> Categories { get; set; }
    public DbSet<DiscountEntity> Discount { get; set; }

    
}
