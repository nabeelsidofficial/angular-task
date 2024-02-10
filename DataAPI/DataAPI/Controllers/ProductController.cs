using DataAPI.Infrastructure.Models.Products;
using Microsoft.AspNetCore.Mvc;

namespace DataAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;

        private List<Product> products = new List<Product>() {
                new Product(){Id= 0,Price=10,Quantity=50, ProductName="Product A" },
                new Product(){Id= 1,Price=11,Quantity=72, ProductName="Product B" },
                new Product(){Id= 2,Price=12,Quantity=89, ProductName="Product C" },
                new Product(){Id = 3, Price=13,Quantity=34, ProductName="Product D" },
                new Product(){Id = 4, Price=14,Quantity=53, ProductName="Product E" },
                new Product(){Id = 5, Price=15,Quantity=63, ProductName="Product F" }
            };
        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetProducts")]
        public IEnumerable<Product> GetProducts()
        {
            return products;
        }
        [HttpPost]
        [Route("UpdateProduct")]
        public IEnumerable<Product> UpdateProduct([FromBody] RequestProductDTO requestProduct)
        {
            var product = products.FirstOrDefault(x => x.Id == requestProduct.id);
            if (product != null)
            {
                product.ProductName = requestProduct.productName;
            }
            return products;
        }
    }
}
