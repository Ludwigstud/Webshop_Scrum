using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Manero.Migrations
{
    /// <inheritdoc />
    public partial class Correctlyseedingproducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "CategoryId", "Description", "DiscountId", "ImageUrl", "Price", "PriceAfterSale", "ProductName" },
                values: new object[,]
                {
                    { 1, 1, "Get the job done with our heavy-duty power drill. Perfect for various DIY projects, this drill provides reliable performance and durability.", null, "ProductsImages\\summerPants.jpg", 50, null, "Heavy-Duty Power Drill" },
                    { 2, 3, "A must-have in every toolbox, our versatile screwdriver set is designed for precision and ease of use. Suitable for a wide range of tasks.", null, "ProductsImages\\handBag.jpg", 60, null, "Versatile Screwdriver Set" },
                    { 3, 7, "Build with confidence using our sturdy hammer kit. Crafted for durability, this kit includes a variety of hammers for different applications.", null, "ProductsImages\\shoe.svg", 140, null, "Sturdy Hammer Kit" },
                    { 4, 1, "Protect your hands during any project with our durable work gloves. Comfortable and reliable, these gloves are essential for every handyman.", null, "ProductsImages\\summerDress.jpg", 30, null, "Durable Work Gloves" },
                    { 5, 3, "Accurate measurements made easy with our precision measuring tape. Ideal for carpentry and other tasks where precision is key.", null, "ProductsImages\\handBag.jpg", 35, null, "Precision Measuring Tape" },
                    { 6, 2, "Stay organized and have your tools at your fingertips with our professional tool belt. Adjustable and durable, it's a must-have for any handyman.", null, "ProductsImages\\shoe.jpg", 90, null, "Professional Tool Belt" },
                    { 7, 3, "Secure your projects with our heavy-duty nails assortment. Various sizes for different applications, ensuring a strong and reliable hold.", null, "ProductsImages\\shoe.svg", 20, null, "Heavy-Duty Nails Assortment" },
                    { 8, 9, "Organize your tools with our professional tool chest. Sturdy and spacious, it's perfect for storing and transporting your tools with ease.", null, "ProductsImages\\summerDress.jpg", 180, null, "Professional Tool Chest" },
                    { 9, 1, "Fix, repair, and create with our versatile duct tape set. A handy addition to any toolbox, this tape is durable and easy to use.", null, "ProductsImages\\summerPants.jpg", 55, null, "Versatile Duct Tape Set" },
                    { 10, 2, "Keep your feet protected with our heavy-duty work boots. Designed for comfort and safety, these boots are essential for any construction project.", null, "ProductsImages\\handBag.jpg", 110, null, "Heavy-Duty Work Boots" },
                    { 11, 3, "Tighten and loosen with precision using our adjustable wrench set. Versatile and durable, these wrenches are a must-have in any toolkit.", null, "ProductsImages\\shoulderBag.jpg", 30, null, "Adjustable Wrench Set" },
                    { 12, 4, "Drill through any material with ease using our high-quality drill bits. Designed for durability and precision, these bits deliver reliable performance.", null, "ProductsImages\\shoe.svg", 80, null, "High-Quality Drill Bits" },
                    { 13, 5, "Protect your eyes during projects with our safety goggles set. Comfortable and effective, these goggles provide clear vision and safety.", null, "ProductsImages\\handBag.jpg", 25, null, "Safety Goggles Set" },
                    { 14, 6, "Keep your toolbox neat and organized with our toolbox organization kit. Includes compartments and accessories for efficient tool storage.", null, "ProductsImages\\handBag.jpg", 40, null, "Toolbox Organization Kit" },
                    { 15, 7, "Achieve a flawless finish with our professional paint sprayer. Ideal for DIY painting projects, this sprayer ensures even and smooth coverage.", null, "ProductsImages\\summerPants.jpg", 170, null, "Professional Paint Sprayer" },
                    { 16, 8, "Protect your knees during tasks with our ultra-comfort knee pads. Designed for comfort and durability, these knee pads provide reliable support.", null, "ProductsImages\\blackSneakers.jpg", 20, null, "Ultra-Comfort Knee Pads" },
                    { 17, 9, "Have the right screw for every task with our precision screw assortment. Various sizes and types to meet the needs of different projects.", null, "ProductsImages\\shoulderBag.jpg", 220, null, "Precision Screw Assortment" },
                    { 18, 1, "Stay comfortable during projects with our heavy-duty work shirt. Durable and breathable, it's the perfect shirt for a day of hard work.", null, "ProductsImages\\warmHat.jpg", 50, null, "Heavy-Duty Work Shirt" },
                    { 19, 2, "Keep your tools safe from the elements with our weatherproof tool bag. Designed for durability, it's perfect for on-the-go professionals.", null, "ProductsImages\\summerDress.jpg", 90, null, "Weatherproof Tool Bag" },
                    { 20, 3, "Power your tools with our flexible extension cord. Durable and versatile, this extension cord is an essential accessory for any workshop.", null, "ProductsImages\\t-shirt.jpg", 30, null, "Flexible Extension Cord" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 20);
        }
    }
}
