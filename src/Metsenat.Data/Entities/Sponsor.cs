using Metsenat.Data.Entities.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Metsenat.Data.Entities;
public class Sponsor
{
    public int Id { get; set; }
    [Required]
    public string? FullName { get; set; }
    [Required]
    public string? PhoneNumber { get; set; }
    public ESponsorType SponsorType { get; set; }
    public virtual List<Payment>? Payments { get; set; }
    public string? OrganizationName { get; set; }
    public virtual ICollection<SponsorStudent>? SponsorStudents { get; set; }
}
