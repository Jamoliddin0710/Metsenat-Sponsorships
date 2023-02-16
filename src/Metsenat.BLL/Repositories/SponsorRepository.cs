using Mapster;
using Metsenat.BLL.DTOs;
using Metsenat.BLL.ViewModels;
using Metsenat.Data.Data;
using Metsenat.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Repositories;
public class SponsorRepository : ISponsorRepository
{
    private readonly AppDbContext _context;

    public SponsorRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task CreateSponsor(CreateSponsorDto createsponsorDto)
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

    public async Task<List<SponsorView>> GetSponsor()
    {
        var sponsors = await _context.Sponsors.ToListAsync();
        return sponsors.Adapt<List<SponsorView>>();
    }

    public async Task<SponsorView> GetSponsorById(int sponsorId)
    {
        var sponsor = await _context.Sponsors.FindAsync(sponsorId);
        return sponsor.Adapt<SponsorView>();
    }

    public async Task UpdateSponsor(int sponsorId, UpdateSponsorDto updateSponsorDto)
    {
        var sponsor = await _context.Sponsors.FindAsync(sponsorId);
        sponsor.SponsorType = updateSponsorDto.SponsorStatus;
        _context.Sponsors.Update(sponsor);
        await _context.SaveChangesAsync();
    }
}
