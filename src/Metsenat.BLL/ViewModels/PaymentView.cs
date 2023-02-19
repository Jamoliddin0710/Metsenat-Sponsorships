using Metsenat.Data.Entities.Enums;

namespace Metsenat.BLL.ViewModels;

public class PaymentView
{
    public decimal Amount { get; set; }
    public EPaymentStatus PaymentStatus { get; set; }
    public EPaymentType PaymentType { get; set; }
}