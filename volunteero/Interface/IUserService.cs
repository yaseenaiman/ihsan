using volunteero.DTO;

using volunteero.Service;


namespace volunteero.Services 
{
	public interface IUserService
	{
		Task<UserResponse> RegiserUserAsync(RegisterDTO registerDTO);
		Task<UserResponse> LoginAsync(LoginDTO loginDTO);
	}
}
