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
    public int UniversityId { get; set; }
    [ForeignKey(nameof(UniversityId))]
    public virtual University? University { get; set; }
    public EStudentDegree StudentDegree { get; set; }
    public decimal DedicatedAmount { get; set; }
    public decimal AmountOfStudentsContract { get; set; }
    public ICollection<SponsorStudent>? SponsorStudents { get; set; }
}
