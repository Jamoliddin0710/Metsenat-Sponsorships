
using Metsenat.BLL.Dto;
using Metsenat.Data.Entities;
using Metsenat.Data.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Repositories
{
    public interface ISponsorRepository
    {
        Task GetSponsor();
        Task<Sponsor> GetSponsorById(int sponsorId);
        Task CreateSponsor(CreatesponsorDto createsponsorDto);
        Task UpdateSponsor(int sponsorId , UpdateSponsorDto updateSponsorDto);
        Task DeleteSponsor(int sponsorId);
        
    }
}
