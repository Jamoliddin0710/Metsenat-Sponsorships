using Metsenat.Data.Data;
using Metsenat.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Metsenat.BLL.Repositories;
public class StudentRepository : IStudentRepository
{
    private readonly AppDbContext _context;
    public StudentRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<bool> AddStudentAsync(Student createStudent)
    {
        try
        {
            await _context.Students.AddAsync(createStudent);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            return false;
        }
    }

    public async Task<bool> DeleteStudentAsync(Student student)
    {
        _context.Students.Remove(student);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<List<Student>> GetAllStudentsAsync() =>
        await _context.Students.ToListAsync();

    public async Task<Student> GetStudentByIdAsync(int studentId)
    {
        var student = await _context.Students.FirstOrDefaultAsync(s => s.Id == studentId);

        if (student is null)
            throw new Exception(); //todo exeception handling

        return student;
    }

    public async Task<Student> UpdateStudentAsync(Student updateStudent)
    {
        _context.Students.Update(updateStudent);
        await _context.SaveChangesAsync();
        return updateStudent;
    }
}

