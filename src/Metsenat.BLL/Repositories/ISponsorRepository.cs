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
    Task<List<SponsorView>> GetSponsor();
    Task<SponsorView> GetSponsorById(int sponsorId);
    Task CreateSponsor(CreateSponsorDto createsponsorDto);
    Task UpdateSponsor(int sponsorId , UpdateSponsorDto updateSponsorDto);
    Task DeleteSponsor(int sponsorId);
    
}
