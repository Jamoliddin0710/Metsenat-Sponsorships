using Metsenat.BLL.DTOs;
using Metsenat.BLL.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Services
{
    public interface ISponsorService
    {
        Task GetSponsor();
        Task<SponsorView> GetSponsorById(int sponsorId);
        Task<SponsorView> CreateSponsor(CreateSponsorDto createSponsor);
        Task<SponsorView> UpdateSponsor(int sponsorId , UpdateSponsorDto updateSponsorDto);
        Task<bool> DeleteSponsor(int sponsorId);
    }
}
