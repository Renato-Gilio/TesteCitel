using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using TesteCitel.API.DTOs;
using TesteCitel.API.Models;
using TesteCitel.API.Repositories;

namespace TesteCitel.API.Services
{
    public class CategoriaService : ICategoriaService
    {
        private readonly IRepository _repository;
        private readonly IMapper _mapper;
        private readonly ICategoriaRepository _categoriaRepository;

        public CategoriaService(IRepository repository, ICategoriaRepository categoriaRepository, IMapper mapper)
        {
            _repository = repository;
            _categoriaRepository = categoriaRepository;
            _mapper = mapper;
        }

        public async Task<CategoriaDTO> Create(SalvarCategoriaDTO dto)
        {
            Categoria categoria = new Categoria();
            _mapper.Map<SalvarCategoriaDTO, Categoria>(dto, categoria);

            _repository.Add(categoria);
            await _repository.SaveChangesAsync();

            var response = _mapper.Map<Categoria, CategoriaDTO>(categoria);

            return response;
        }

        public async Task<List<CategoriaDTO>> Get()
        {
            var result = await _categoriaRepository.Get();
            var categorias = _mapper.Map<List<CategoriaDTO>>(result);

            return categorias;
        }

        public async Task<CategoriaDTO> GetById(int id)
        {
            var result = await _categoriaRepository.GetById(id);
            var categoria = _mapper.Map<CategoriaDTO>(result);

            return categoria;
        }

        public async Task<CategoriaDTO> Update(AtualizarCategoriaDTO dto, int id)
        {
            Categoria categoria = new Categoria();
            dto.Id = id;
            _mapper.Map<AtualizarCategoriaDTO, Categoria>(dto, categoria);

            _repository.Update(categoria);
            await _repository.SaveChangesAsync();

            var response = _mapper.Map<Categoria, CategoriaDTO>(categoria);

            return response;
        }

        public async Task Delete(int id)
        {
            var result = await _categoriaRepository.GetById(id);
            _repository.Delete(result);
            await _repository.SaveChangesAsync();
        }
    }
}
