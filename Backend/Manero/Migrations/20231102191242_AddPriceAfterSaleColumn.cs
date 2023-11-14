using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Manero.Migrations
{
    /// <inheritdoc />
    public partial class AddPriceAfterSaleColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PriceAfterSale",
                table: "Products",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PriceAfterSale",
                table: "Products");
        }
    }
}
