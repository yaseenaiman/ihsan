using volunteero.DTO;
using volunteero.Services;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace volunteero.Controllers
{
	public class AuthController : Controller
	{
		private readonly IUserService _userService;

		public AuthController(IUserService userService)
        {
			_userService = userService;
		}


        [HttpPost]
		[Route("api/[Controller]/[Action]")]
		public async Task<IActionResult> RegisterAsync([FromBody] RegisterDTO registerDTO)
		{

				var result = await _userService.RegiserUserAsync(registerDTO);

				if (result.isSuccess)
				{
					return Ok(result);
				}

			
			return BadRequest(result.Errors);
		}

        [HttpPost]
        [Route("api/[Controller]/[Action]")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginDTO loginDto)
        {
            var result = await _userService.LoginAsync(loginDto);

            if (result.isSuccess)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

    }
}
