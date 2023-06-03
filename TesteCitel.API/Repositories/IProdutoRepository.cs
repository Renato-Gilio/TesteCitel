using System.Collections.Generic;
using System.Threading.Tasks;
using TesteCitel.API.Models;

namespace TesteCitel.API.Repositories
{
    public interface IProdutoRepository
    {
        Task<List<Produto>> Get();
        Task<Produto> GetById(int id);
    }
}
 