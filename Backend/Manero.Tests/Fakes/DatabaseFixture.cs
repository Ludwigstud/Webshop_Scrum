using Manero.Models.Contexts;
using Manero.Models.dto;
using Manero.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Manero.Tests.Fakes
{
    public class DatabaseFixture : IDisposable
    {
        public DataContext Context { get; private set; }



        public DatabaseFixture()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;
            Context = new DataContext(options);
        }

        public void Dispose()
        {
            Context.Dispose();
        }
       
    }
}
