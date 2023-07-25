﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace volunteero.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AdminPanelController : Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<IdentityUser> _userManager;

        public AdminPanelController(RoleManager<IdentityRole> roleManager
            , UserManager<IdentityUser> userManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
        }
        [HttpPost]
        public async Task<IActionResult> CreateRole(String RoleName)
        {
            try
            {
                var RoleExist = await _roleManager.FindByNameAsync(RoleName);
                if (RoleExist == null)
                {
                    var Result = await _roleManager.CreateAsync(new IdentityRole(RoleName));
                    if (Result.Succeeded)
                    {
                        return Ok(new { message = "Role added successfully" });

                    }
                    else
                    {
                        return BadRequest(new { message = "Something went wrong" });

                    }
                }

                return BadRequest(new { error = "Role already exist" });


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AssignRoleToUser(String Email, String RoleName)
            {
            try
            {
                var UserExist = await _userManager.FindByEmailAsync(Email);
                if (UserExist == null)
                {
                    return NotFound();
                }

                var RoleExist = await _roleManager.FindByNameAsync(RoleName);
                if (RoleExist == null)
                {
                    return NotFound();
                }
                var Result = await _userManager.AddToRoleAsync(UserExist, RoleName);

                if (Result.Succeeded)
                {
                    return Ok();
                }
                return BadRequest();


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


    }
}
