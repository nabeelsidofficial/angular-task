using DataAPI.Infrastructure.Models.Products;
using Microsoft.AspNetCore.Mvc;

namespace DataAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        private readonly SingletonProduct _singleton_product;
        public ProductController(ILogger<ProductController> logger, SingletonProduct singleton_product)
        {
            _logger = logger;
            _singleton_product = singleton_product;
        }
        [HttpGet]
        [Route("GetProducts")]
        public IEnumerable<Product> GetProducts()
        {
            return _singleton_product.products;
        }
        [HttpPost]
        [Route("UpdateProduct")]
        public IEnumerable<Product> UpdateProduct([FromBody] RequestProductDTO requestProduct)
        {
            var product = _singleton_product.products.FirstOrDefault(x => x.Id == requestProduct.id);
            if (product != null)
            {
                product.ProductName = requestProduct.productName;
            }
            return _singleton_product.products;
        }
    }
}
