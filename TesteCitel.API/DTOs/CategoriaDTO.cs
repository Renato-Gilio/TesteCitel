using System.ComponentModel.DataAnnotations;

namespace TesteCitel.API.DTOs
{
    public class CategoriaDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
    }

    public class SalvarCategoriaDTO
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [StringLength(50,MinimumLength = 3, ErrorMessage = "O Campo deve conter de 3 à 50 caracteres")]
        public string Nome { get; set; }        
    }

    public class AtualizarCategoriaDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "O Campo deve conter de 3 à 50 caracteres")]
        public string Nome { get; set; }
    }
}
