using System.Collections.Generic;
using System.Threading.Tasks;
using TesteCitel.API.Models;

namespace TesteCitel.API.Repositories
{
    public interface ICategoriaRepository
    {
        Task<List<Categoria>> Get();
        Task<Categoria> GetById(int id);
    }
}
 