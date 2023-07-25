using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using volunteero.Models;
using Microsoft.EntityFrameworkCore;
using NHibernate.Mapping;
using Microsoft.AspNetCore.Identity;

namespace volunteero.Models;

[Table("PostLIKEs")]
public partial class PostLike : General
{
    [Key]
    [Column("likepostID")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int LikepostId { get; set; }

    [Column("LikeapprovedPostID")]
    public int ApprovedPostId { get; set; }
    [ForeignKey("ApprovedPostId")]
    public virtual Aprovedpost? approvedPostID { get; set; }

    [Column("userID")]
    [StringLength(450)]
    public string UserID { get; set; }
    public User? User { get; set; }

}
