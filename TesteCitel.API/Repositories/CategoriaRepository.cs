using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteCitel.API.Context;
using TesteCitel.API.Models;

namespace TesteCitel.API.Repositories
{
    public class CategoriaRepository : ICategoriaRepository
    {
        private readonly CitelContext _context;

        public CategoriaRepository(CitelContext context) 
        {
            _context = context;
        }

        public async Task<List<Categoria>> Get()
        {
            IQueryable<Categoria> query = _context.Categorias;

            return await query.ToListAsync();
        }

        public async Task<Categoria> GetById(int id)
        {
            IQueryable<Categoria> query = _context.Categorias;                

            return await query.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
