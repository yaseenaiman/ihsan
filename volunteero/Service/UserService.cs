using volunteero.DTO;
using volunteero.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using volunteero.Models;

namespace volunteero.Service
{
	public class UserService : IUserService
	{
		private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UserService(UserManager<User> userManager, SignInManager<User> signInManager, RoleManager<IdentityRole> roleManager
, IConfiguration configuration)
        {
		  _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _roleManager = roleManager;

        }

        public async Task<UserResponse> LoginAsync(LoginDTO loginDTO)
        {
            if (loginDTO == null)
                throw new NullReferenceException("loginDTO is null");

            var UserinDB = await _userManager.FindByEmailAsync(loginDTO.Email);

            if (UserinDB == null)
            {
                return new UserResponse
                {
                    Message = "no username",
                    isSuccess = false,
                };
            }

            var result = await _signInManager.PasswordSignInAsync(UserinDB.UserName, loginDTO.Password, false, false);
            if (result.Succeeded)
            {
                var userRoles = await _userManager.GetRolesAsync(UserinDB);
                // Else we generate JSON Web Token
                var claims = new List<Claim>();

                foreach (var role in userRoles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role));

                }
                claims.Add(new Claim(ClaimTypes.Name, loginDTO.Email));

                // Else we generate JSON Web Token
                var TokenHandler = new JwtSecurityTokenHandler();
                var TokenKey = Encoding.UTF8.GetBytes(_configuration["JWT:Key"]);
                var TokenDescription = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddHours(0.5),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(TokenKey), SecurityAlgorithms.HmacSha256Signature)
                };
                var Token = TokenHandler.CreateToken(TokenDescription);
                return new UserResponse
                {
                    Message = TokenHandler.WriteToken(Token),
                    isSuccess = true,
                };
            }


            return new UserResponse
            {
                Message = "something went wrong",
                isSuccess = false,
            };
        }

        async Task<UserResponse> IUserService.RegiserUserAsync(RegisterDTO registerDTO)
		{
			if(registerDTO == null)
		    throw new NullReferenceException("Register Dto is null");

			if(registerDTO.Password != registerDTO.ConfirmPassword)
			{
				return new UserResponse
				{
					Message = "Passwords doesnt match",
					isSuccess = false,
				};
			}
			var user = new User
			{
				PhoneNumber = registerDTO.Mobilenumber,
			UserName = registerDTO.Username,
			Email = registerDTO.Email,
            IsOrganisation = registerDTO.IsOrganisation,
            IsVolunteer = registerDTO.IsVolunteer,

			};

			var result = await _userManager.CreateAsync(user, registerDTO.Password);

			if (result.Succeeded)
			{
				return new UserResponse
				{
					Message = "user created successfully",
					isSuccess = true,
				};
			}
			return new UserResponse
			{
				Message = "user didn't create",
				isSuccess = false,
				Errors = result.Errors.Select(e => e.Description)
			};
			}
		}
	}
