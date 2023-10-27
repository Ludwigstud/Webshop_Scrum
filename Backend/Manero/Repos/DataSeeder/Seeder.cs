using Manero.Models.Contexts;
using Manero.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.IO;

namespace Manero.Repos.DataSeeder
{
    public static class Seeder
    {
        public static void SeedAll(DataContext context)
        {
            SeedCategories(context);
            SeedProducts(context);
        }

        private static void SeedCategories(DataContext context)
        {
            context.Categories.AddRange(
                new CategoryEntity { CategoryName = "Electronics" },
                new CategoryEntity { CategoryName = "Books" },
                    new CategoryEntity { CategoryName = "Home Decor" },
                    new CategoryEntity { CategoryName = "Toys" },
                    new CategoryEntity { CategoryName = "Kitchen Appliances" },
                    new CategoryEntity { CategoryName = "Sporting Goods" },
                    new CategoryEntity { CategoryName = "Beauty Products" },
                    new CategoryEntity { CategoryName = "Furniture" },
                    new CategoryEntity { CategoryName = "Jewelry" }
            );

            context.SaveChanges();
        }

        private static void SeedProducts(DataContext context)
        {

            var seedData = JArray.Parse(File.ReadAllText(@"./Repos/DataSeeder/ProductData.json"));
            var products = new List<ProductEntity>();

            var imageFiles = Directory.GetFiles(@"wwwroot/Images/ProductsImages");
            var imageCount = imageFiles.Length;

            for (var i = 0; i < seedData.Count; i++)
            {
                var product = seedData[i].ToObject<ProductEntity>();

                if (product != null)
                {
                    var random = new Random();
                    var imageIndex = random.Next(0, imageFiles.Length);
                    product.ImageUrl = Path.Combine("ProductsImages", Path.GetFileName(imageFiles[imageIndex]));

                    products.Add(product);
                }
            }

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
