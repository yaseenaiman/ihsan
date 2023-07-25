using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using volunteero.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace volunteero.Models;

[Table("commentPost")]
public partial class CommentPost : General
{
    [Key]
    [Column("PostCommentID")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int PostCommentId { get; set; }
    [Column("numberofComments")]
    public int numberofComments { get; set; }
    [Column("comment_describt")]
    [StringLength(40)]
    public string? CommentDescribt { get; set; }

    [Column("CommentapprovedPostID")]
    public int ApprovedPostId { get; set; }
    [ForeignKey("ApprovedPostId")]
    public virtual Aprovedpost? approvedPostID { get; set; }

    [Column("userID")]
    [StringLength(450)]
    public string userID { get; set; }
    public User? User { get; set; }


}
