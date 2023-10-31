using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Manero.Migrations
{
    /// <inheritdoc />
    public partial class addresstagNew : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_AddressTagEntity_AddressTagId1",
                table: "Address");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AddressTagEntity",
                table: "AddressTagEntity");

            migrationBuilder.RenameTable(
                name: "AddressTagEntity",
                newName: "AddressTags");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AddressTags",
                table: "AddressTags",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_AddressTags_AddressTagId1",
                table: "Address",
                column: "AddressTagId1",
                principalTable: "AddressTags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_AddressTags_AddressTagId1",
                table: "Address");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AddressTags",
                table: "AddressTags");

            migrationBuilder.RenameTable(
                name: "AddressTags",
                newName: "AddressTagEntity");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AddressTagEntity",
                table: "AddressTagEntity",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_AddressTagEntity_AddressTagId1",
                table: "Address",
                column: "AddressTagId1",
                principalTable: "AddressTagEntity",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
