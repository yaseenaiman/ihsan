using Microsoft.AspNetCore.Mvc;
using volunteero.Data;
using volunteero.DTO;
using volunteero.Models;

namespace Volunteero.Controllers
{
    public class PendingPostController : Controller
    {
        private readonly Volunteer1Context _context;

        public PendingPostController(Volunteer1Context context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/[Controller]/[Action]")]

        public ICollection<Pendingpost> GetAllPending()
        {
            return _context.Pendingposts.ToList();
        }





        [HttpGet]
        [Route("api/[Controller]/[Action]")]
        public IActionResult GetPendingPostByID(int? PendingpostId)
        {
            if (PendingpostId == null)
                return NoContent();

            var PendingInfo = _context.Pendingposts.FirstOrDefault(m => m.PendingpostId == PendingpostId);

            if (PendingInfo == null)
            {
                return NoContent();
            }

            var PendingDTO = new pendingDTO()
            {
                PostName = PendingInfo.Postname,
                userID = PendingInfo.userID,

            };
            return Ok(PendingDTO);
        }
    }
}
