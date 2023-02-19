using Mapster;
using Metsenat.BLL.DTOs;
using Metsenat.BLL.Repositories;
using Metsenat.BLL.ViewModels;
using Metsenat.Data.Data;
using Metsenat.Data.Entities;

namespace Metsenat.BLL.Services;

public class SponsorService : ISponsorService
{
    private readonly AppDbContext _context;
    private readonly ISponsorRepository _repository;
    public SponsorService(AppDbContext context, ISponsorRepository repository)
    {
        _context = context;
        _repository = repository;
    }

    public async Task<SponsorView> CreateSponsor(CreateSponsorDto createSponsorDto)
    {    
       var result = int.TryParse(createSponsorDto.Phone, out var phoneNumber);
        if (!result) throw new Exception("phone value is not number");
        await _repository.CreateSponsor(createSponsorDto);
        return createSponsorDto.Adapt<SponsorView>();
    }

    public async Task<bool> DeleteSponsor(int sponsorId)
    {
        var sponsor = await _repository.GetSponsorById(sponsorId);
        if (sponsor is null) return false;
        return await _repository.DeleteSponsor(sponsorId);
    }

    public async Task<List<SponsorView>> GetSponsors()
    {
        return await _repository.GetSponsors();
    }

    public async Task<SponsorView> GetSponsorById(int sponsorId)
    {
        var sponsor = await _repository.GetSponsorById(sponsorId);
        if (sponsor is null)
            throw new Exception();
        return sponsor.Adapt<SponsorView>();
    }

    public async Task<SponsorView> UpdateSponsor(int sponsorId, UpdateSponsorDto updateSponsorDto)
    {
        var sponsor = await _repository.GetSponsorById(sponsorId);
        if (sponsor is null)
            throw new Exception();
        var currentsponsor = await _repository.UpdateSponsor(sponsorId, updateSponsorDto);
        return currentsponsor.Adapt<SponsorView>();
    }
}
