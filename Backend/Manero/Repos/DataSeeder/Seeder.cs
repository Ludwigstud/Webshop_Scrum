using Newtonsoft.Json.Linq;
using Microsoft.EntityFrameworkCore;
using Manero.Models.Entities;

namespace Manero.Repos.DataSeeder
{
    public static class Seeder
    {
        public static void SeedAll(ModelBuilder builder)
        {
         
            SeedCategories(builder);
            SeedProducts(builder);
        }

        private static void SeedCategories(ModelBuilder builder)
        {
            builder.Entity<CategoryEntity>().HasData(
            new CategoryEntity { Id = 1, CategoryName = "Power Tools" },
            new CategoryEntity { Id = 2, CategoryName = "Building Materials" },
            new CategoryEntity { Id = 3, CategoryName = "Plumbing Supplies" },
            new CategoryEntity { Id = 4, CategoryName = "Hardware and Fasteners" },
            new CategoryEntity { Id = 5, CategoryName = "Electrical Components" },
            new CategoryEntity { Id = 6, CategoryName = "Paint and Finishes" },
            new CategoryEntity { Id = 7, CategoryName = "Home and Outdoor" },
            new CategoryEntity { Id = 8, CategoryName = "Safety and Security" },
            new CategoryEntity { Id = 9, CategoryName = "Automotive and Tools" }
        );
        }

        private static void SeedProducts(ModelBuilder builder)
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

                    product.ImageUrl = product.ImageUrl.Replace("\\", "/");
                    products.Add(product);
                }
            }

            builder.Entity<ProductEntity>().HasData(products);
        }


    }
}
