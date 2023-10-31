using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Manero.Migrations
{
    /// <inheritdoc />
    public partial class addresstag : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AddressTagId",
                table: "Address",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "AddressTagId1",
                table: "Address",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "AddressTagEntity",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TagName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AddressTagEntity", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_AddressTagId1",
                table: "Address",
                column: "AddressTagId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_AddressTagEntity_AddressTagId1",
                table: "Address",
                column: "AddressTagId1",
                principalTable: "AddressTagEntity",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_AddressTagEntity_AddressTagId1",
                table: "Address");

            migrationBuilder.DropTable(
                name: "AddressTagEntity");

            migrationBuilder.DropIndex(
                name: "IX_Address_AddressTagId1",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "AddressTagId",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "AddressTagId1",
                table: "Address");
        }
    }
}
