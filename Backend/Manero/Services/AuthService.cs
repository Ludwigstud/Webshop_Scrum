using Manero.Helpers;
using Manero.Interfaces;
using Manero.Models;
using Manero.Models.Contexts;
using Manero.Models.Entities;
using Manero.Models.Schemas;
using Manero.Enums;
using Manero.Models.DTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Newtonsoft.Json.Linq;
using Manero.Repos;

namespace Manero.Services;

public class AuthService : IAuthService
{

    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly DataContext _dataContext;


    public AuthService(UserManager<IdentityUser> userManager, DataContext dataContext, SignInManager<IdentityUser> signInManager)
    {

        _userManager = userManager;
        _dataContext = dataContext;
        _signInManager = signInManager;

    }


    public async Task<ServiceResponse<UserToken>> SignInAsync(ServiceRequest<SignInSchema> request)
    {
        var response = new ServiceResponse<UserToken>();
        try
        {
            if (request.Content != null && !string.IsNullOrEmpty(request.Content.Password) && !string.IsNullOrEmpty(request.Content.Email))
            {
                var result = await _signInManager.PasswordSignInAsync(request.Content.Email, request.Content.Password, request.Content.RememberMe, false);
                if (result.Succeeded)
                {
                    var userEntity = await _userManager.FindByEmailAsync(request.Content.Email);
                    if (userEntity != null)
                    {
                        // Get user claims (including custom claims) to include in the token
                        var userClaims = await _userManager.GetClaimsAsync(userEntity);

                        // Add user's ID as a claim
                        userClaims.Add(new Claim(ClaimTypes.NameIdentifier, userEntity.Id));

                        // Generate token with combined claims
                        var token = TokenGenerator.Generate(userClaims, DateTime.Now.AddDays(30));
                        response.Content = token;
                        response.StatusCode = StatusCode.Ok;
                    }
                    else
                    {
                        response.StatusCode = StatusCode.Conflict;
                        response.Content = null;
                    }

                }
                else
                {
                    response.StatusCode = StatusCode.Conflict;
                    response.Content = null;
                }
            }
            else
            {
                response.StatusCode = StatusCode.BadRequest;
                response.Content = null;
            }

        }
        catch
        {
            response.StatusCode = StatusCode.InternalServerError;
            response.Content = null;
        }
        return response;
    }

    public async Task<ServiceResponse<bool>> SignUpAsync(ServiceRequest<SignUpSchema> request)
    {
        var response = new ServiceResponse<bool>();
        try
        {
            if (request.Content != null && !string.IsNullOrEmpty(request.Content.Password) && !string.IsNullOrEmpty(request.Content.Email) && !string.IsNullOrEmpty(request.Content.FirstName) && !string.IsNullOrEmpty(request.Content.LastName))
            {

                IdentityUser identityUser = request.Content;

                var result = await _userManager.CreateAsync(identityUser, request.Content.Password);

                if (result.Succeeded)
                {
                    CustomerEntity customerEntity = request.Content;
                    customerEntity.Id = identityUser.Id;

                    await _dataContext.AddAsync(customerEntity);
                    await _dataContext.SaveChangesAsync();

                    response.Content = true;
                    response.StatusCode = StatusCode.Created;
                }
                else
                {
                    response.Content = false;
                    response.StatusCode = StatusCode.BadRequest;
                }

            }
            else
            {
                response.Content = false;
                response.StatusCode = StatusCode.BadRequest;
            }
        }
         catch
        {
            response.StatusCode = StatusCode.InternalServerError;
            response.Content = false;
        }
        return response;
    }




    
}
