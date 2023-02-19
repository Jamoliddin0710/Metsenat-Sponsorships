using Metsenat.BLL.DTOs;
using Metsenat.BLL.ViewModels;
using Metsenat.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Services
{
    public interface ISponsorService
    {
        Task<List<SponsorView>> GetSponsors();
        Task<SponsorView> GetSponsorById(int sponsorId);
        Task<SponsorView> CreateSponsor(CreateSponsorDto createSponsor);
        Task<SponsorView> UpdateSponsor(int sponsorId , UpdateSponsorDto updateSponsorDto);
        Task<bool> DeleteSponsor(int sponsorId);
    }
}
