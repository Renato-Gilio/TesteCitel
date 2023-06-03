using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TesteCitel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckHealthController : ControllerBase
    {
        /// <summary>
        /// Esta rota retorna se a API está on-line
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { Message = "API ONLINE" });
        }
    }
}
