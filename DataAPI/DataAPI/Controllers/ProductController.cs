using Microsoft.AspNetCore.Mvc;

namespace DataAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        [Route("GetProducts")]
        public IEnumerable<Product> GetProducts()
        {
            List<Product> products = new List<Product>() {
                new Product(){Price=10,Quantity=5, ProductName="Product A" },
                new Product(){Price=10,Quantity=5, ProductName="Product B" },
                new Product(){Price=10,Quantity=5, ProductName="Product C" },
                new Product(){Price=10,Quantity=5, ProductName="Product D" },
                new Product(){Price=10,Quantity=5, ProductName="Product E" },
                new Product(){Price=10,Quantity=5, ProductName="Product F" }
            };
            return products;
        }

    }
}
