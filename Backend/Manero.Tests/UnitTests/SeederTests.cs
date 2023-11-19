using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Manero.Models.Contexts;
using Manero.Models.Entities;
using Manero.Repos.DataSeeder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Xunit;

namespace Manero.Tests.UnitTests
{
    public class SeederTests
    {
        [Fact]
        public void SeedAll_ShouldSeedDataInDatabase()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;

            using (var context = new DataContext(options))
            {
                // Act
                var modelBuilder = new ModelBuilder(new ConventionSet());
                Seeder.SeedAll(modelBuilder);

                // Assert
                var categories = context.Set<CategoryEntity>().ToList();
                var products = context.Set<ProductEntity>().ToList();

                Assert.NotEmpty(categories);
                Assert.NotEmpty(products);

            }
        }
    }
}
