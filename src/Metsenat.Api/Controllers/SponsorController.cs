using Metsenat.BLL.DTOs;
using Metsenat.BLL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Metsenat.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SponsorController : ControllerBase
    {
        private readonly ISponsorService sponsorService;

        public SponsorController(ISponsorService sponsorService)
        {
            this.sponsorService = sponsorService;
        }

        [HttpPost("/sponsors")]
        public async Task<IActionResult> AddSponsor(CreateSponsorDto createSponsor)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(await sponsorService.CreateSponsor(createSponsor));
        }



    }
}
