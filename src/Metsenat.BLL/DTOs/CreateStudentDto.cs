using Metsenat.Data.Entities.Enums;
using System.ComponentModel.DataAnnotations;

namespace Metsenat.BLL.DTOs;
public class CreateStudentDto
{
    [Required]
    public string? FullName { get; set; }
    [Required]
    public string? PhoneNumber { get; set; }
    [Required]
    public string? UniversityName { get; set; }
    public EStudentDegree StudentDegree { get; set; }
    public string? AmountOfStudentsContract { get; set;}
}
