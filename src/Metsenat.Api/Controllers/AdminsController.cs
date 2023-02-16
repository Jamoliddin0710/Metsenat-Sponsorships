using Metsenat.BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace Metsenat.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdminsController : ControllerBase
{
    private readonly IStudentService _studentService;

    public AdminsController(IStudentService studentService)
    {
        _studentService = studentService;
    }

}
