using Metsenat.BLL.DTOs;
using Metsenat.BLL.ViewModels;

namespace Metsenat.BLL.Services;
public interface IStudentService
{
    Task<StudentView> CreateStudentAsync(CreateStudentDto createStudentDto);
    Task<StudentView> GetStudentByIdAsync(int studentId); 
    Task<List<StudentView>> GetAllStudentsAsync();
    Task<bool> DeleteStudentAsync(int studentId);
    Task<StudentView> UpdateStudentAsync(int studentId,UpdateStudentDto updateStudentDto);
}
