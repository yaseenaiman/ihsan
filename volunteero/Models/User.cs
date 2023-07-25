using Microsoft.AspNetCore.Identity;

namespace volunteero.Models
{
    public class User : IdentityUser
    {
        public int? Age { get; set; }
        public String? FirstName { get; set; }
        public String? SecondName { get; set; }
        public String? FourthName { get; set; }
        public String? SurName { get; set; }
        public Boolean? Gender { get; set; }
        public Boolean? IsVolunteer { get; set; }
        public Boolean? IsOrganisation { get; set; }


    }
}
