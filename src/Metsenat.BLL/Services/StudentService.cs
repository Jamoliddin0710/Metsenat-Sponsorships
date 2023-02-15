using Castle.DynamicProxy.Generators;
using Mapster;
using Metsenat.BLL.DTOs;
using Metsenat.BLL.Repositories;
using Metsenat.BLL.ViewModels;
using Metsenat.Data.Entities;

namespace Metsenat.BLL.Services;
public class StudentService : IStudentService
{
    private readonly IStudentRepository _studentRepository;

    public StudentService(IStudentRepository studentRepository)
    {
        _studentRepository = studentRepository;
    }

    public async Task<StudentView> CreateStudentAsync(CreateStudentDto createStudentDto)
    {
        await _studentRepository.AddStudentAsync(createStudentDto.Adapt<Student>());
        return createStudentDto.Adapt<StudentView>();
    }

    public async Task<bool> DeleteStudentAsync(int studentId)
    {
        var student = await _studentRepository.GetStudentByIdAsync(studentId);

        if (student is null)
            return false;

        return await _studentRepository.DeleteStudentAsync(student);
    }

    public async Task<List<StudentView>> GetAllStudentsAsync()
    {
        var organizations = await _studentRepository.GetAllStudentsAsync();

        return organizations!.Select(x => x.Adapt<StudentView>()).ToList();
    }

    public async Task<StudentView> GetStudentByIdAsync(int studentId)
    {
        var student = await _studentRepository.GetStudentByIdAsync(studentId);

        if (student is null)
            throw new Exception(); //todo handle exceptions

        return student.Adapt<StudentView>();
    }

    public async Task<StudentView> UpdateStudentAsync(int studentId, UpdateStudentDto updateStudentDto)
    {
        throw new Exception();
    }
}
