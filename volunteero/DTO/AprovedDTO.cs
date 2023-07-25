using System.ComponentModel.DataAnnotations;

namespace volunteero.DTO
{
    public class AprovedDTO
    {
        
       public int ApprovedPostID { get; set; }

        public string Postname { get; set; }
       

        public string userID { get; set; }

        public string Postdescribtion { get; set; }

        public string  UpdateBy { get; set;}
        public IFormFile ImageFile { get; set; }


    }
}
