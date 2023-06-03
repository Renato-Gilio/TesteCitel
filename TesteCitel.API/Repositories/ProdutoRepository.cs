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

        public async Task<List<Produto>> Get()
        {
            IQueryable<Produto> query = _context.Produtos;

            return await query.ToListAsync();
        }

        public async Task<Produto> GetById(int id)
        {
            IQueryable<Produto> query = _context.Produtos;                

            return await query.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
