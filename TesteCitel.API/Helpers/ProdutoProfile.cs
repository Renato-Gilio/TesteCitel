using AutoMapper;
using TesteCitel.API.DTOs;
using TesteCitel.API.Models;

namespace TesteCitel.API.Helpers
{
    public class ProdutoProfile : Profile
    {
        public ProdutoProfile()
        {
            CreateMap<Produtos, ProdutoDTO>();
            CreateMap<Produtos, SalvarProdutoDTO>().ReverseMap();
            CreateMap<SalvarProdutoDTO, ProdutoDTO>();

            CreateMap<Produtos, AtualizarProdutoDTO>().ReverseMap();
            CreateMap<AtualizarProdutoDTO, ProdutoDTO>();
        }
    }
}
