using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Manero.Migrations
{
    /// <inheritdoc />
    public partial class idfix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_AddressTags_AddressTagId1",
                table: "Address");

            migrationBuilder.DropIndex(
                name: "IX_Address_AddressTagId1",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "AddressTagId1",
                table: "Address");

            migrationBuilder.AlterColumn<int>(
                name: "AddressTagId",
                table: "Address",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Address_AddressTagId",
                table: "Address",
                column: "AddressTagId");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_AddressTags_AddressTagId",
                table: "Address",
                column: "AddressTagId",
                principalTable: "AddressTags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_AddressTags_AddressTagId",
                table: "Address");

            migrationBuilder.DropIndex(
                name: "IX_Address_AddressTagId",
                table: "Address");

            migrationBuilder.AlterColumn<string>(
                name: "AddressTagId",
                table: "Address",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "AddressTagId1",
                table: "Address",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Address_AddressTagId1",
                table: "Address",
                column: "AddressTagId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_AddressTags_AddressTagId1",
                table: "Address",
                column: "AddressTagId1",
                principalTable: "AddressTags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
