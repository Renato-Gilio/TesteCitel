using System.Collections.Generic;
using System.Threading.Tasks;
using TesteCitel.API.DTOs;

namespace TesteCitel.API.Services
{
    public interface IProdutoService
    {
        Task<List<ProdutoDTO>> Get();
        Task<ProdutoDTO> GetById(int id);
        Task<ProdutoDTO> Create(SalvarProdutoDTO dto);
        Task<ProdutoDTO> Update(AtualizarProdutoDTO dto, int id);
        Task Delete(int id);
    }
}
