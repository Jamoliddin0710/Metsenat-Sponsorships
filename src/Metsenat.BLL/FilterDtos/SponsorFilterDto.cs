using Metsenat.BLL.FilterDtos.Enum;
using Metsenat.Common.Models;

namespace Metsenat.BLL.FilterDtos;

public class SponsorFilterDto : PaginationParams
{
    public decimal? Amount { get; set; }
    public ESponsorFilter? SponsorFilter { get; set; }
    public DateTime? CreatedDate { get; set; }
}