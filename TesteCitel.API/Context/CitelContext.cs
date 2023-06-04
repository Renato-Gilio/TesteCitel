using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using TesteCitel.API.Models;

namespace TesteCitel.API.Context
{
    public class CitelContext : DbContext
    {
        public CitelContext(DbContextOptions<CitelContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Categoria>()
                .HasMany(c => c.Produtos)
                .WithOne(p => p.Categoria);
        }

        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Produtos> Produtos { get; set; }
    }
}
