using Mapster;
using Metsenat.BLL.Dto;
using Metsenat.Data.Data;
using Metsenat.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Repositories
{
    public class SponsorRepository : ISponsorRepository
    {
        private readonly AppDbContext _context;

        public SponsorRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreateSponsor(CreatesponsorDto createsponsorDto)
        {
            var sponsor = createsponsorDto.Adapt<Sponsor>();
            await _context.Sponsors.AddAsync(sponsor);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteSponsor(int sponsorId)
        {
            var sponsor = await _context.Sponsors.FindAsync(sponsorId);
            _context.Sponsors.Remove(sponsor);
            await _context.SaveChangesAsync();
        }

        public Task GetSponsor()
        {
            throw new NotImplementedException();
        }

        public async Task<Sponsor> GetSponsorById(int sponsorId)
        {
            var sponsor = await _context.Sponsors.FindAsync(sponsorId);
            return sponsor;
        }

        public async Task UpdateSponsor(int sponsorId, UpdateSponsorDto updateSponsorDto)
        {
            var sponsor = await _context.Sponsors.FindAsync(sponsorId);
            sponsor.SponsorType = updateSponsorDto.SponsorStatus;
            _context.Sponsors.Update(sponsor);
            await _context.SaveChangesAsync();
        }


    }
}
