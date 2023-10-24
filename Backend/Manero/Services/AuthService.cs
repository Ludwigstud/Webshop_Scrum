﻿using Manero.Helpers;
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
            if(request.Content != null)
            {
                var result = await _signInManager.PasswordSignInAsync(request.Content.Email, request.Content.Password, request.Content.RememberMe, false);
                if (result.Succeeded)
                {
                    var userEntity = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == request.Content.Email);
                    if (userEntity != null)
                    {
                        // Get user claims (including custom claims) to include in the token
                        var userClaims = await _userManager.GetClaimsAsync(userEntity);

                        // Add user's ID as a claim
                        userClaims.Add(new Claim(ClaimTypes.NameIdentifier, userEntity.Id));

                        // Generate token with combined claims
                        var token = TokenGenerator.Generate(userClaims, DateTime.Now.AddDays(30));
                        response.Content!.Token = token;
                        response.StatusCode = StatusCode.Ok;
                    }
                    response.StatusCode = StatusCode.Conflict;
                    response.Content = null;
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
    public async Task<bool> SignUpAsync(SignUpSchema schema)
    {
        IdentityUser identityUser = schema;

        var result = await _userManager.CreateAsync(identityUser, schema.Password);

        if (result.Succeeded)
        {
            CustomerEntity customerEntity = schema;
            customerEntity.Id = identityUser.Id;

            await _dataContext.AddAsync(customerEntity);
            await _dataContext.SaveChangesAsync();

            return true;
        }
        return false;
    }

    public async Task<string> SignInAsync(SignInSchema schema)
    {
        var result = await _signInManager.PasswordSignInAsync(schema.Email, schema.Password, schema.RememberMe, false);
        if (result.Succeeded)
        {
            var userEntity = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == schema.Email);
            if (userEntity != null)
            {
                // Get user claims (including custom claims) to include in the token
                var userClaims = await _userManager.GetClaimsAsync(userEntity);

                // Add user's ID as a claim
                userClaims.Add(new Claim(ClaimTypes.NameIdentifier, userEntity.Id));

                // Generate token with combined claims
                var token = TokenGenerator.Generate(userClaims, DateTime.Now.AddDays(30));
                return token;
            }
            return null!;
        }
        return null!;
    }

    
}
