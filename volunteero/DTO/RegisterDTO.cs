using System.ComponentModel.DataAnnotations;

namespace volunteero.DTO
{
	public class RegisterDTO
	{

        [Required]
        [StringLength(50)]
        public string Username { get; set; } = null!;
        [Required]
        [StringLength(50)]
        public string Email { get; set; } = null!;

        [Required]
        [StringLength(50)]
        public string Mobilenumber { get; set; } = null!;

        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string Password { get; set; } = null!;
        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string ConfirmPassword { get; set; } = null!;

        public Boolean IsVolunteer { get; set; }
        public Boolean IsOrganisation { get; set; }
    }
}
