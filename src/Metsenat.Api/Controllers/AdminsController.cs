using Metsenat.BLL.DTOs;
using Metsenat.BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace Metsenat.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdminsController : ControllerBase
{
    private readonly IStudentService _studentService;
    private readonly ISponsorService _sponsorService;
    public AdminsController(IStudentService studentService, ISponsorService sponsorService)
    {
        _studentService = studentService;
        _sponsorService = sponsorService;
    }

    [HttpPost("/students")]
    public async Task<IActionResult> AddStudents([FromBody] CreateStudentDto createStudentDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        await _studentService.CreateStudentAsync(createStudentDto);
        return Ok();
    }

    [HttpGet("/students")]
    public async Task<IActionResult> GetStudents()
        => Ok(await _studentService.GetAllStudentsAsync());

    [HttpGet("/students/{studentId:int}")]
    public async Task<IActionResult> GetStudentById(int studentId)
        => Ok(await _studentService.GetStudentByIdAsync(studentId));

    [HttpDelete("/students/{studentId:int}")]
    public async Task<IActionResult> DeleteStudent(int studentId)
        => Ok(await _studentService.DeleteStudentAsync(studentId));

    [HttpPut("/students/{studentId:int}")]
    public async Task<IActionResult> UpdateStudent(int studentId, UpdateStudentDto updateStudentDto)
        => Ok(await _studentService.UpdateStudentAsync(studentId, updateStudentDto));

    [HttpGet("/sponsors")]
    public async Task<IActionResult> GetAllSponsors()
        => Ok(await _sponsorService.GetSponsors());

    [HttpGet("/sponsor/{sponsorId:int}")]
    public async Task<IActionResult> GetSponsorById(int sponsorId)
        => Ok(await _sponsorService.GetSponsorById(sponsorId));

    [HttpPut("/sponsors/{sponsorId:int}")]
    public async Task<IActionResult> UpdateSponsor(int sponsorId, UpdateSponsorDto updateSponsorDto)
        => Ok(await _sponsorService.UpdateSponsor(sponsorId, updateSponsorDto));

    [HttpDelete("/sponsors/{sponsorId:int}")]
    public async Task<IActionResult> DeleteSponsor(int sponsorId)
        => Ok(await _sponsorService.DeleteSponsor(sponsorId));
}
