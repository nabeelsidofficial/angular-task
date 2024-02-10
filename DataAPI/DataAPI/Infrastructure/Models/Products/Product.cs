namespace DataAPI.Infrastructure.Models.Products
{
    public class SingletonProduct
    {
        public List<Product> products = new List<Product>() {
                new Product(){Id= 0,Price=10,Quantity=50, ProductName="Product A" },
                new Product(){Id= 1,Price=11,Quantity=72, ProductName="Product B" },
                new Product(){Id= 2,Price=12,Quantity=89, ProductName="Product C" },
                new Product(){Id = 3, Price=13,Quantity=34, ProductName="Product D" },
                new Product(){Id = 4, Price=14,Quantity=53, ProductName="Product E" },
                new Product(){Id = 5, Price=15,Quantity=63, ProductName="Product F" }
            };
    }
    public class Product
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public string ProductName { get; set; }
    }
}
