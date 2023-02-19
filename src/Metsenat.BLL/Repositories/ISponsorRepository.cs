using Metsenat.BLL.DTOs;
using Metsenat.BLL.ViewModels;
using Metsenat.Data.Entities;
using Metsenat.Data.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Repositories;
public interface ISponsorRepository
{
    Task<List<Sponsor>> GetSponsors();
    Task<Sponsor> GetSponsorById(int sponsorId);
    Task<bool> CreateSponsor(CreateSponsorDto createsponsorDto);
    Task<Sponsor> UpdateSponsor(int sponsorId , UpdateSponsorDto updateSponsorDto);
    Task<bool> DeleteSponsor(int sponsorId);
    
}
