using System.ComponentModel.DataAnnotations.Schema;

namespace Metsenat.Data.Entities;

public class SponsorStudent
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    [ForeignKey(nameof(StudentId))]
    public Student? Student { get; set; }
    public int SponsorId { get; set; }
    [ForeignKey(nameof(SponsorId))]
    public Sponsor? Sponsor { get; set; }
}
