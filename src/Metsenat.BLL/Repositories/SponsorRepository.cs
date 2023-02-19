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

    public async Task<bool> CreateSponsor(CreateSponsorDto createsponsorDto)
    {
        if (!int.TryParse(createsponsorDto.Phone, out var phoneNumber))
            return false;
       
        try
        {
            var sponsor = createsponsorDto.Adapt<Sponsor>();
            var result = await _context.Sponsors.AddAsync(sponsor);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            return false;
        }
    }

    public async Task<bool> DeleteSponsor(int sponsorId)
    {
        try
        {
            var sponsor = await _context.Sponsors.FirstOrDefaultAsync(sponsor => sponsor.Id == sponsorId);
            _context.Sponsors.Remove(sponsor);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            return false;
        }
    }

    public async Task<List<SponsorView>> GetSponsors()
    {
        var sponsors = await _context.Sponsors.ToListAsync();
        return sponsors.Adapt<List<SponsorView>>();
    }

    public async Task<Sponsor> GetSponsorById(int sponsorId)
    {
        var sponsor = await _context.Sponsors.FirstOrDefaultAsync(sponsor => sponsor.Id == sponsorId);
        return sponsor;
    }

    public async Task<Sponsor> UpdateSponsor(int sponsorId, UpdateSponsorDto updateSponsorDto)
    {
        var sponsor = await _context.Sponsors.FirstOrDefaultAsync(sponsor => sponsor.Id == sponsorId);
        sponsor.SponsorType = updateSponsorDto.SponsorStatus;
        _context.Sponsors.Update(sponsor);
        await _context.SaveChangesAsync();
        return sponsor;
    }
}
