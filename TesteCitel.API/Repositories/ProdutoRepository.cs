using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteCitel.API.Context;
using TesteCitel.API.Models;

namespace TesteCitel.API.Repositories
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly CitelContext _context;

        public ProdutoRepository(CitelContext context) 
        {
            _context = context;
        }

        public async Task<List<Produtos>> Get()
        {
            IQueryable<Produtos> query = _context.Produtos;

            return await query.ToListAsync();
        }

        public async Task<Produtos> GetById(int id)
        {
            IQueryable<Produtos> query = _context.Produtos;                

            return await query.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
