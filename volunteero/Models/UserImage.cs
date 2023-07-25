using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using volunteero.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace volunteero.Models
{
    public class UserImage : General
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserImageID { get; set; }
        public String? FilePath { get; set; }

        [Column("ImageapprovedPostID")]
        public int ApprovedPostId { get; set; }
        [ForeignKey("ApprovedPostId")]
        public virtual Aprovedpost? approvedPostID { get; set; }

        public String? Title { get; set; }
        [StringLength(450)]
        public String? UserId { get; set; }
        public User? User { get; set; }

        public Boolean IsApproved { get; set; }

    }
}
