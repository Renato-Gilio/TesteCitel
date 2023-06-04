using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using TesteCitel.API.DTOs;
using TesteCitel.API.Models;
using TesteCitel.API.Repositories;

namespace TesteCitel.API.Services
{
    public class ProdutoService : IProdutoService
    {
        private readonly IRepository _repository;
        private readonly IMapper _mapper;
        private readonly IProdutoRepository _produtoRepository;

        public ProdutoService(IRepository repository, IProdutoRepository produtoRepository, IMapper mapper)
        {
            _repository = repository;
            _produtoRepository = produtoRepository;
            _mapper = mapper;
        }

        public async Task<ProdutoDTO> Create(SalvarProdutoDTO dto)
        {
            Produtos produto = new Produtos();
            _mapper.Map<SalvarProdutoDTO, Produtos>(dto, produto);

            _repository.Add(produto);
            await _repository.SaveChangesAsync();

            var response = _mapper.Map<Produtos, ProdutoDTO>(produto);

            return response;
        }

        public async Task<List<ProdutoDTO>> Get()
        {
            var result = await _produtoRepository.Get();
            var produtos = _mapper.Map<List<ProdutoDTO>>(result);

            return produtos;
        }

        public async Task<ProdutoDTO> GetById(int id)
        {
            var result = await _produtoRepository.GetById(id);
            var produto = _mapper.Map<ProdutoDTO>(result);

            return produto;
        }

        public async Task<ProdutoDTO> Update(AtualizarProdutoDTO dto, int id)
        {
            Produtos produto = new Produtos();
            dto.Id = id;
            _mapper.Map<AtualizarProdutoDTO, Produtos>(dto, produto);

            _repository.Update(produto);
            await _repository.SaveChangesAsync();

            var response = _mapper.Map<Produtos, ProdutoDTO>(produto);

            return response;
        }

        public async Task Delete(int id)
        {
            var result = await _produtoRepository.GetById(id);
            _repository.Delete(result);
            await _repository.SaveChangesAsync();
        }
    }
}
