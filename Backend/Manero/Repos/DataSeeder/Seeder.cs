using Manero.Models.Contexts;
using Manero.Models.Entities;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting.Internal;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

public class DatabaseSeeder
{
    private readonly DataContext _context;
    private readonly IWebHostEnvironment _hostingEnvironment; // Add this field


    public DatabaseSeeder(DataContext context, IWebHostEnvironment hostingEnvironment)
    {
        _context = context;
        _hostingEnvironment = hostingEnvironment;
    }

    public void SeedData()
    {
        SeedCategories();
        SeedDiscounts();
        SeedProducts();
    }

    private void SeedCategories()
    {
        var categories = new List<CategoryEntity>
        {
            new CategoryEntity { CategoryName = "Category 1" },
            new CategoryEntity { CategoryName = "Category 2" },
            // Add more categories as needed
        };

        // Add more categories to reach your desired number
        for (int i = 3; i <= 1000; i++)
        {
            categories.Add(new CategoryEntity { CategoryName = $"Category {i}" });
        }

        _context.Categories.AddRange(categories);
        _context.SaveChanges(); // Save changes for categories
    }

    private void SeedDiscounts()
    {
        var discounts = new List<DiscountEntity>
        {
            new DiscountEntity { DiscountName = "Discount 1", Discount = 10 },
            new DiscountEntity { DiscountName = "Discount 2", Discount = 20 },
            // Add more discounts as needed
        };

        // Add more discounts to reach your desired number
        for (int i = 3; i <= 1000; i++)
        {
            discounts.Add(new DiscountEntity { DiscountName = $"Discount {i}", Discount = i * 10 });
        }

        _context.Discount.AddRange(discounts);
        _context.SaveChanges(); // Save changes for discounts
    }

    private void SeedProducts()
    {
        try
        {
            string contentRootPath = _hostingEnvironment.ContentRootPath;
            string jsonFilePath = Path.Combine(contentRootPath, "MockData.json");
            Console.WriteLine("Reading JSON file...");
            var json = File.ReadAllText("MockData.json");
            Console.WriteLine("JSON file read successfully.");
            var products = JsonSerializer.Deserialize<List<ProductEntity>>(json);

            // Get existing category and discount IDs from the database
            var categoryIds = _context.Categories.Select(c => c.Id).ToList();
            var discountIds = _context.Discount.Select(d => d.Id).ToList();

            var random = new Random();

            foreach (var product in products)
            {
                // Assign random category and discount IDs from the existing ones
                product.CategoryId = categoryIds[random.Next(categoryIds.Count)];
                product.DiscountId = discountIds[random.Next(discountIds.Count)];
                _context.Products.Add(product);
            }


            _context.SaveChanges();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }
    }
}
