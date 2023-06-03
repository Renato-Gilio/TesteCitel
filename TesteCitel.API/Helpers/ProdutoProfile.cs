using AutoMapper;
using TesteCitel.API.DTOs;
using TesteCitel.API.Models;

namespace TesteCitel.API.Helpers
{
    public class ProdutoProfile : Profile
    {
        public ProdutoProfile()
        {
            CreateMap<Produto, ProdutoDTO>();
            CreateMap<Produto, SalvarProdutoDTO>().ReverseMap();
            CreateMap<SalvarProdutoDTO, ProdutoDTO>();

            CreateMap<Produto, AtualizarProdutoDTO>().ReverseMap();
            CreateMap<AtualizarProdutoDTO, ProdutoDTO>();
        }
    }
}
