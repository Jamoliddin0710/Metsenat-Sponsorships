using Metsenat.Data.Entities.Enums;
using System.ComponentModel.DataAnnotations;

namespace Metsenat.BLL.ViewModels;
public class StudentView
{
    [Required]
    public string? FullName { get; set; }
    [Required]
    public string? PhoneNumber { get; set; }
    [Required]
    public string? UniversityName { get; set; }
    public EStudentDegree StudentDegree { get; set; }
    public decimal DedicatedAmount { get; set; }
    public decimal AmountOfStudentsContract { get; set; }
}
