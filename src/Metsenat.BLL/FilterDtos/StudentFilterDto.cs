using Metsenat.BLL.FilterDtos.Enum;

namespace Metsenat.BLL.FilterDtos;

public class StudentFilterDto
{
    public string? UniversityName { get; set; }
    public EStudentFilter? StudentFilter { get; set; }
}