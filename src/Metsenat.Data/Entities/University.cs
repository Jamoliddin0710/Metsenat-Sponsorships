using System.ComponentModel.DataAnnotations;

namespace Metsenat.Data.Entities;
public class University
{
    public int Id { get; set; }
    [Required]
    public string? Name { get; set; }
    public virtual List<Student>? Students { get; set; }
}
