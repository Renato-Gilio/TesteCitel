using AutoMapper;
using TesteCitel.API.DTOs;
using TesteCitel.API.Models;

namespace TesteCitel.API.Helpers
{
    public class CategoriaProfile : Profile
    {
        public CategoriaProfile()
        {
            CreateMap<Categoria, CategoriaDTO>();
            CreateMap<Categoria, SalvarCategoriaDTO>().ReverseMap();
            CreateMap<SalvarCategoriaDTO, CategoriaDTO>();

            CreateMap<Categoria, AtualizarCategoriaDTO>().ReverseMap();
            CreateMap<AtualizarCategoriaDTO, CategoriaDTO>();
        }
    }
}
