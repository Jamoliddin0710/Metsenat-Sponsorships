using Metsenat.Data.Entities.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Metsenat.Data.Entities;
public class Payment
{
    public int Id { get; set; }
    [Required]
    public decimal Amount { get; set; }
    public int SponsorId { get; set; }
    [ForeignKey(nameof(SponsorId))]
    public virtual Sponsor? Sponsor { get;set; }
    public EPaymentStatus PaymentStatus { get; set; }
    [Required]
    public EPaymentType PaymentType { get; set; }
}
