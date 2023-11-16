namespace Manero.Interfaces
{
    public interface IDiscountSchema
    {

        Guid Id { get; set; }
        string DiscountName { get; set; }
        int Discount { get; set; }

        DateTime? CreatedAt { get; set; }

        DateTime? DeletedAt { get; set; }

        DateTime? ExpiringDate { get; set; }


    }
}
