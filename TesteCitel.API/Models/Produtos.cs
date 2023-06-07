using System.ComponentModel.DataAnnotations.Schema;

namespace TesteCitel.API.Models
{
    [Table( "Produtos")]
    public class Produtos
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public string Imagem { get; set; }

        public Categoria Categoria { get; set; }
        public int CategoriaId { get; set; }
    }
}
