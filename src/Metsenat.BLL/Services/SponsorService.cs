using Mapster;
using Metsenat.BLL.DTOs;
using Metsenat.BLL.Repositories;
using Metsenat.BLL.ViewModels;
using Metsenat.Data.Data;
using Metsenat.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Services
{
    public class SponsorService : ISponsorService
    {
        private readonly AppDbContext _context;
        private readonly SponsorRepository _repository;
        public SponsorService(AppDbContext context, SponsorRepository repository)
        {
            _context = context;
            _repository = repository;
        }

        public async Task<SponsorView> CreateSponsor(CreateSponsorDto createSponsorDto)
        {
            var sponsor = await _repository.CreateSponsor(createSponsorDto);
            return sponsor.Adapt<SponsorView>();
        }

        public async Task<bool> DeleteSponsor(int sponsorId)
        {
            var sponsor = await _repository.GetSponsorById(sponsorId);
            if (sponsor is null) return false;
            return await _repository.DeleteSponsor(sponsorId);
        }

        public Task GetSponsor()
        {
            throw new NotImplementedException();
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
}
