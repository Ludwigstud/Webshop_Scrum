using Manero.Interfaces;
using Manero.Models.Contexts;
using Manero.Repos;
using Manero.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

//Repos 
builder.Services.AddScoped<CustomerRepo>();
builder.Services.AddScoped<AddressRepo>();
builder.Services.AddScoped<CustomerAddressRepo>();
builder.Services.AddScoped<AddressTagRepo>();
builder.Services.AddScoped<CustomerCardRepo>();




// Services

builder.Services.AddControllers().AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
    );
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(x => x.UseSqlServer(builder.Configuration.GetConnectionString("Identity")));
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<ProfileService>();
builder.Services.AddScoped<CustomerRepo>();
builder.Services.AddScoped<ICreditCardService, CreditCardService>();









//Identity
builder.Services.AddIdentity<IdentityUser, IdentityRole>(x =>
{
    x.SignIn.RequireConfirmedAccount = false;
    x.Password.RequiredLength = 8;
    x.User.RequireUniqueEmail = true;
}).AddEntityFrameworkStores<DataContext>();
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.Events = new JwtBearerEvents
    {
        OnTokenValidated = context =>
        {
            return Task.CompletedTask;
        }
    };

    x.RequireHttpsMetadata = true;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration.GetSection("TokenHandler").GetValue<string>("Issuer")!,
        ValidateAudience = true,
        ValidAudience = builder.Configuration.GetSection("TokenHandler").GetValue<string>("Audience")!,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration.GetSection("TokenHandler").GetValue<string>("SecurityKey")!))
    };

});




var app = builder.Build();
app.UseStaticFiles();
app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
