using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Manero.Migrations
{
    /// <inheritdoc />
    public partial class AddedCVVColumnInCustomerCardEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ExpiryDate",
                table: "CustomerCard",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<int>(
                name: "CVV",
                table: "CustomerCard",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CVV",
                table: "CustomerCard");

            migrationBuilder.AlterColumn<DateTime>(
                name: "ExpiryDate",
                table: "CustomerCard",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
