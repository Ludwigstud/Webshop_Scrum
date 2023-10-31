using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Manero.Migrations
{
    /// <inheritdoc />
    public partial class AddFullnameOnCustomerCardEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "CustomerCard",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullName",
                table: "CustomerCard");
        }
    }
}
