using Manero.Enums;
using Microsoft.AspNetCore.Http;

namespace Manero.Models
{
    public class ServiceResponse<T>
    {
        public StatusCode StatusCode { get; set; }
        public T? Content { get; set; }
    }
}
