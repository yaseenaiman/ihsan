using System.ComponentModel.DataAnnotations;

namespace volunteero.DTO
{
    public class pendingDTO
    {
        public int PendingpostId { get; set; }
        public string PostName { get; set; } = null!;

      
        public string? Postdescribtion { get; set; }
        public string userID { get; set; }
        public IFormFile ImageFile { get; set; }
        public string UpdateBy { get; set; }

    }
}
