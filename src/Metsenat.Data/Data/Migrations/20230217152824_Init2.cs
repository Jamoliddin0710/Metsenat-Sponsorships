using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Metsenat.Data.Data.Migrations
{
    /// <inheritdoc />
    public partial class Init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "AmountOfStudentsContract", "DedicatedAmount", "FullName", "PhoneNumber", "StudentDegree", "UniversityName" },
                values: new object[,]
                {
                    { 1, 4500m, 8000m, "Mark Brown", "+123456787943", 0, "University Of Europe" },
                    { 2, 4500m, 7500m, "Amber Green", "+534574347943", 1, "UIBH" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
