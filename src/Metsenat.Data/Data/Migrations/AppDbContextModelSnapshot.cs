﻿// <auto-generated />
using Metsenat.Data.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Metsenat.Data.Data.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Proxies:ChangeTracking", false)
                .HasAnnotation("Proxies:CheckEquality", false)
                .HasAnnotation("Proxies:LazyLoading", true)
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Metsenat.Data.Entities.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Amount")
                        .HasColumnType("numeric");

                    b.Property<int>("PaymentStatus")
                        .HasColumnType("integer");

                    b.Property<int>("PaymentType")
                        .HasColumnType("integer");

                    b.Property<int>("SponsorId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("SponsorId");

                    b.ToTable("Payments");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Amount = 1000m,
                            PaymentStatus = 2,
                            PaymentType = 2,
                            SponsorId = 1
                        },
                        new
                        {
                            Id = 2,
                            Amount = 350m,
                            PaymentStatus = 0,
                            PaymentType = 2,
                            SponsorId = 1
                        },
                        new
                        {
                            Id = 3,
                            Amount = 2000m,
                            PaymentStatus = 0,
                            PaymentType = 0,
                            SponsorId = 2
                        },
                        new
                        {
                            Id = 4,
                            Amount = 6000m,
                            PaymentStatus = 0,
                            PaymentType = 1,
                            SponsorId = 3
                        });
                });

            modelBuilder.Entity("Metsenat.Data.Entities.Sponsor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("OrganizationName")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("SponsorType")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Sponsors");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            FullName = "John Doe",
                            PhoneNumber = "+9989093416234",
                            SponsorType = 0
                        },
                        new
                        {
                            Id = 2,
                            FullName = "Kevin Jhonson",
                            OrganizationName = "Henkel",
                            PhoneNumber = "+912342326234",
                            SponsorType = 1
                        },
                        new
                        {
                            Id = 3,
                            FullName = "Harry Wick",
                            OrganizationName = "P&G",
                            PhoneNumber = "+493434226234",
                            SponsorType = 1
                        });
                });

            modelBuilder.Entity("Metsenat.Data.Entities.SponsorStudent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("SponsorId")
                        .HasColumnType("integer");

                    b.Property<int>("StudentId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("SponsorId");

                    b.HasIndex("StudentId");

                    b.ToTable("SponsorStudent");
                });

            modelBuilder.Entity("Metsenat.Data.Entities.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<decimal>("AmountOfStudentsContract")
                        .HasColumnType("numeric");

                    b.Property<decimal>("DedicatedAmount")
                        .HasColumnType("numeric");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("StudentDegree")
                        .HasColumnType("integer");

                    b.Property<string>("UniversityName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Students");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AmountOfStudentsContract = 4500m,
                            DedicatedAmount = 8000m,
                            FullName = "Mark Brown",
                            PhoneNumber = "+123456787943",
                            StudentDegree = 0,
                            UniversityName = "University Of Europe"
                        },
                        new
                        {
                            Id = 2,
                            AmountOfStudentsContract = 4500m,
                            DedicatedAmount = 7500m,
                            FullName = "Amber Green",
                            PhoneNumber = "+534574347943",
                            StudentDegree = 1,
                            UniversityName = "UIBH"
                        });
                });

            modelBuilder.Entity("Metsenat.Data.Entities.Payment", b =>
                {
                    b.HasOne("Metsenat.Data.Entities.Sponsor", "Sponsor")
                        .WithMany("Payments")
                        .HasForeignKey("SponsorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Sponsor");
                });

            modelBuilder.Entity("Metsenat.Data.Entities.SponsorStudent", b =>
                {
                    b.HasOne("Metsenat.Data.Entities.Sponsor", "Sponsor")
                        .WithMany("SponsorStudents")
                        .HasForeignKey("SponsorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Metsenat.Data.Entities.Student", "Student")
                        .WithMany("SponsorStudents")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Sponsor");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Metsenat.Data.Entities.Sponsor", b =>
                {
                    b.Navigation("Payments");

                    b.Navigation("SponsorStudents");
                });

            modelBuilder.Entity("Metsenat.Data.Entities.Student", b =>
                {
                    b.Navigation("SponsorStudents");
                });
#pragma warning restore 612, 618
        }
    }
}
