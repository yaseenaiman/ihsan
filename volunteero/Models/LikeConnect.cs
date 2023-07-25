using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace volunteero.Models
{
    public class LikeConnect
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LikeId { get; set; }
        public string? UserID_First { get; set; }
        public User? User { get; set; }


        public int LikeNumberOfLikesid { get; set; }
        [ForeignKey("likepostID")]
        public virtual PostLike? LikepostId { get; set; }
    }
}
