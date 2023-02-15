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
        Task GetSponsorById(int sponsorId);
        Task CreateSponsor();
        Task UpdateSponsor();
        Task DeleteSponsor();
    }
}
