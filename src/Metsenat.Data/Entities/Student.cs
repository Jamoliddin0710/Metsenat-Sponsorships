using Metsenat.Data.Entities.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Metsenat.Data.Entities;
public class Student
{
    public int Id { get; set; }
    [Required]
    public string? FullName { get; set; }
    [Required]
    public string? PhoneNumber { get; set; }
    [Required]
    public string? UniversityName { get; set; }
    public EStudentDegree StudentDegree { get; set; }
    public decimal DedicatedAmount { get; set; }
    public decimal AmountOfStudentsContract { get; set; }
    public virtual ICollection<SponsorStudent>? SponsorStudents { get; set; }
}
