using System.Collections.Generic;
using System.Threading.Tasks;
using TesteCitel.API.Models;

namespace TesteCitel.API.Repositories
{
    public interface IProdutoRepository
    {
        Task<List<Produtos>> Get();
        Task<Produtos> GetById(int id);
    }
}
 