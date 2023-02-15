using Metsenat.BLL.DTOs;
using Metsenat.BLL.View;
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
    Task<List<GetSponsorView>> GetSponsor();
    Task<GetSponsorView> GetSponsorById(int sponsorId);
    Task CreateSponsor(CreateSponsorDto createsponsorDto);
    Task UpdateSponsor(int sponsorId , UpdateSponsorDto updateSponsorDto);
    Task DeleteSponsor(int sponsorId);
    
}
