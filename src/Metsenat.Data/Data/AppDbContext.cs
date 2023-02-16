using Metsenat.Data.Data.Helper;
using Metsenat.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Metsenat.Data.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options) { }
    public DbSet<Sponsor> Sponsors { get; set; }
    public DbSet<Student> Students { get; set; }
    public DbSet<Payment> Payments { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        DataSeeder.SeedData(builder);
    }

}


