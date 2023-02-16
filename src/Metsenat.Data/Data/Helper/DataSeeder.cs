using Metsenat.Data.Entities;
using Metsenat.Data.Entities.Enums;
using Microsoft.EntityFrameworkCore;

namespace Metsenat.Data.Data.Helper;
public static class DataSeeder
{
    public static void SeedData(ModelBuilder builder)
    {
        #region Sponsors
        builder.Entity<Sponsor>().HasData(new Sponsor()
        {
            Id = 1,
            FullName = "John Doe",
            PhoneNumber = "+9989093416234",
            SponsorType = ESponsorType.JismoniyShaxs,
        });
        builder.Entity<Sponsor>().HasData(new Sponsor()
        {
            Id = 2,
            FullName = "Kevin Jhonson",
            PhoneNumber = "+912342326234",
            SponsorType = ESponsorType.YuridikShaxs,
            OrganizationName = "Henkel",
        });
        builder.Entity<Sponsor>().HasData(new Sponsor()
        {
            Id = 3,
            FullName = "Harry Wick",
            PhoneNumber = "+493434226234",
            SponsorType = ESponsorType.YuridikShaxs,
            OrganizationName = "P&G",
        });
        #endregion

        #region Payments
        builder.Entity<Payment>().HasData(new Payment
        {
            Id = 1,
            SponsorId = 1,
            PaymentType = EPaymentType.Cash,
            Amount = 1000,
            PaymentStatus = EPaymentStatus.Accepted
        });

        builder.Entity<Payment>().HasData(new Payment
        {
            Id = 2,
            SponsorId = 1,
            PaymentType = EPaymentType.Cash,
            Amount = 350,
            PaymentStatus = EPaymentStatus.New
        });

        builder.Entity<Payment>().HasData(new Payment()
        {
            Id = 3,
            SponsorId = 2,
            PaymentType = EPaymentType.BankTransfer,
            Amount = 2000,
            PaymentStatus = EPaymentStatus.New
        });
        builder.Entity<Payment>().HasData(new Payment()
        {
            Id = 4,
            SponsorId = 3,
            PaymentType = EPaymentType.CreditCard,
            Amount = 6000,
            PaymentStatus = EPaymentStatus.New
        });
        #endregion

        /*#region Students
        builder.Entity<Student>().HasData(new Student()
        {
            Id = 1,
            FullName = "Mark Brown",
            PhoneNumber = "+123456787943",
            AmountOfStudentsContract = 4500,
            DedicatedAmount = 8000,
            StudentDegree = EStudentDegree.Bachelors,
            UniversityName = "University Of Europe",
            SponsorStudents = new List<SponsorStudent>
            {
                new SponsorStudent
                {
                    Id = 1,
                    SponsorId = 1,
                    StudentId = 1,
                },
                new SponsorStudent
                {
                    Id = 2,
                    StudentId = 1,
                    SponsorId = 2,
                }
            }
        });

        builder.Entity<Student>().HasData(new Student()
        {
            Id = 2,
            FullName = "Amber Green",
            PhoneNumber = "+534574347943",
            AmountOfStudentsContract = 4500,
            DedicatedAmount = 7500,
            StudentDegree = EStudentDegree.Masters,
            UniversityName = "UIBH",
            SponsorStudents = new List<SponsorStudent>
            {
                new SponsorStudent
                {
                    Id = 3,
                    StudentId = 2,
                    SponsorId = 1,
                },
                new SponsorStudent
                {
                    Id = 4,
                    StudentId = 2,
                    SponsorId = 2,
                }
            }
        });
        #endregion*/
    }
}
