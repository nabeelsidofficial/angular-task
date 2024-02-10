namespace DataAPI.Infrastructure.Models.Products
{
    public class Product
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public string ProductName { get; set; }
    }
}
