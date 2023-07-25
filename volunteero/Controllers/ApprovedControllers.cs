using Microsoft.AspNetCore.Mvc;
using volunteero.Data;
using volunteero.DTO;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using volunteero.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.Extensions.Hosting;

namespace volunteero.Controllers
{
    [ApiController]


    public class ApprovedPostController : ControllerBase
    {
        private readonly Volunteer1Context _dbContext;
        public readonly IMapper _mapper;
        public ApprovedPostController(Volunteer1Context dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper; 
        }

        [HttpGet]
        [Route("api/[Controller]/[Action]")]
        public ICollection<Aprovedpost> GetAllPosts()
        {
            return _dbContext.Aprovedposts.ToList();
        }

        [HttpGet]
        [Route("api/[Controller]/[Action]")]
        public IActionResult GetUserId(string email)
        {
            // Retrieve the userId based on the provided email
            var user = _dbContext.Users.FirstOrDefault(u => u.Email == email);
            var userId = user?.Id;

            return Ok(new { isSuccess = true, message = userId });
        }

        [HttpPost]
        [Route("api/[Controller]/[Action]")]
        public async Task<IActionResult> CreateApproved([FromForm] AprovedDTO approvedDTO)
        {
            if (approvedDTO == null)
                return NoContent();

            // Get the currently logged-in user's ID

            var AprovedPost = new Aprovedpost
            {
                approvedPostID = approvedDTO.ApprovedPostID,
                Postname = approvedDTO.Postname,
                postdescribtion = approvedDTO.Postdescribtion,
                UpdateBy = approvedDTO.UpdateBy,
                userID = approvedDTO.userID,
                CreateDate = DateTime.Now,
                Status = true,
            };
            _dbContext.Aprovedposts.Add(AprovedPost);

            await _dbContext.SaveChangesAsync();

            if (approvedDTO.ImageFile != null)
            {
                var userImage = new UserImage
                {
                    FilePath = await SaveImage(approvedDTO.ImageFile),
                    ApprovedPostId = AprovedPost.approvedPostID,
                    UserId = AprovedPost.userID,

                };

                _dbContext.UserImages.Add(userImage);
                await _dbContext.SaveChangesAsync();
            }

            return Ok(new { isSuccess = true, message = AprovedPost.approvedPostID });
        }


        private async Task<string> SaveImage(IFormFile imageFile)
        {
            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp/public/uploads");
            var uniqueFileName = $"{Guid.NewGuid()}{Path.GetExtension(imageFile.FileName)}";
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }

            return uniqueFileName;
        }

        [HttpGet]
        [Route("api/[Controller]/[Action]/{approvedPostId}")]
        public IActionResult GetUserImageByApprovedPostId(int approvedPostId)
        {
            var userImage = _dbContext.UserImages.FirstOrDefault(ui => ui.ApprovedPostId == approvedPostId);
            if (userImage == null)
            {
                return NotFound();
            }

            return Ok(new { filePath = userImage.FilePath });
        }

        [HttpGet]
        [Route("api/[Controller]/[Action]")]
        public IActionResult SearchPosts(string searchInput)
        {
            var posts = _dbContext.Aprovedposts
                .Where(post => post.Postname.Contains(searchInput) || post.postdescribtion.Contains(searchInput))
                .ToList();

            var postIds = posts.Select(post => post.approvedPostID).ToList();
            var userImages = _dbContext.UserImages
                .Where(ui => postIds.Contains(ui.ApprovedPostId))
                .ToList();

            var postsWithImages = posts.Select(post =>
            {
                var userImage = userImages.FirstOrDefault(ui => ui.ApprovedPostId == post.approvedPostID);
                var postImage = userImage != null ? $"/uploads/{userImage.FilePath}" : null;

                // Create a new PostDTO object and set its properties
                var postDTO = new PostDTO
                {
                    ApprovedPostID = post.approvedPostID,
                    Postname = post.Postname,
                    Postdescribtion = post.postdescribtion,
                    UpdateBy = post.UpdateBy,
                    userID = post.userID,
                 
                    PostImage = postImage,
                };

                return postDTO;
            });

            return Ok(postsWithImages);
        }



    }
}