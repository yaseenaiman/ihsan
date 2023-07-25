using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using volunteero.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace volunteero.Models;

[Table("pendingpost")]
public partial class Pendingpost : General
{
    [Key]
    [Column("pendingpostID")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int PendingpostId { get; set; }

   
    [StringLength(50)]
    public string Postname { get; set; }

    public Boolean? IsConstruction { get; set; }
    public Boolean? IsEvents { get; set; }
    public Boolean? IsGarbage { get; set; }
    public Boolean? IsOrganisations { get; set; }
    public Boolean? IsDogs { get; set; }
    public Boolean? IsCats { get; set; }

    public Boolean? IsPets { get; set; }

    public Boolean IsApproved { get; set; }


    [Column("userID")]
    [StringLength(450)]
    public string userID { get; set; }
    public User? User { get; set; }

    [StringLength(50)]
    [Column("postdescribtion")]
    public string? postdescribtion { get; set; }

}

