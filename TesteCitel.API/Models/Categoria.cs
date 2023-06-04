using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TesteCitel.API.Models
{
    public class Categoria
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public ICollection<Produtos> Produtos { get; set; }
    }
}
