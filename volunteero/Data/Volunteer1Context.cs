using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using volunteero.Models;

namespace volunteero.Data
{ 
public class Volunteer1Context : IdentityDbContext<User>
{
    public Volunteer1Context()
    {
    }

    public Volunteer1Context(DbContextOptions<Volunteer1Context> options)
        : base(options)
    {
    }

    public  DbSet<Aprovedpost> Aprovedposts { get; set; }



    public  DbSet<LikeConnect> LikeConnects { get; set; }

    public  DbSet<CommentPost> CommentPosts { get; set; }
    public  DbSet<UserImage> UserImages { get; set; }


    public  DbSet<Pendingpost> Pendingposts { get; set; }

    public  DbSet<PostLike> PostLIKEs { get; set; }






}
}
