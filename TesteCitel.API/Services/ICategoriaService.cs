using System.Collections.Generic;
using System.Threading.Tasks;
using TesteCitel.API.DTOs;

namespace TesteCitel.API.Services
{
    public interface ICategoriaService
    {
        Task<List<CategoriaDTO>> Get();
        Task<CategoriaDTO> GetById(int id);
        Task<CategoriaDTO> Create(SalvarCategoriaDTO dto);
        Task<CategoriaDTO> Update(AtualizarCategoriaDTO dto, int id);
        Task Delete(int id);
    }
}
