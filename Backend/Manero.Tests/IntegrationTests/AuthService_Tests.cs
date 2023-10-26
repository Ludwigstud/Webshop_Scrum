using Manero.Enums;
using Manero.Models;
using Manero.Models.Schemas;
using Manero.Tests.Fakes;


namespace Manero.Tests.IntegrationTests;

public class AuthService_Tests
{
    private readonly InjectFixture _injectFixture;

    public AuthService_Tests()
    {
        _injectFixture = new InjectFixture();
    }

    

    [Fact]
    public async Task SignUpAsync_Should_Return200Reponse_WhenCreatedSuccessfully()
    {
        //Arrange
        var signUpSchema = new SignUpSchema() { FirstName = "Test", LastName = "Test", Email = "Dennis@domain.com", Password = "BytMig123!" };
        var request = new ServiceRequest<SignUpSchema>
        {
            Content = signUpSchema
        };


        //Act
        var result = await _injectFixture._authService.SignUpAsync(request);


        //Assert
        Assert.NotNull(result);
        Assert.Equal(201, (int)result.StatusCode);
        Assert.True(result.Content);

        _injectFixture.Dispose();
    }

    [Fact]
    public async Task SignUpAsync_Should_ReturnBadRequest_And_False_WhenPasswordDoesntMeetTheRequirements()
    {
        //Arrange
        var signUpSchema = new SignUpSchema() { FirstName = "Test", LastName = "Test", Email = "Dennis@domain.com", Password = "BytMi" };
        var request = new ServiceRequest<SignUpSchema>
        {
            Content = signUpSchema
        };


        //Act
        var result = await _injectFixture._authService.SignUpAsync(request);


        //Assert
        Assert.False(result.Content);
        Assert.Equal(StatusCode.BadRequest, result.StatusCode);


        _injectFixture.Dispose();
    }



    [Fact]
    public async Task SignInAsync_Should_ReturnAToken_And_Response200_WhenSuccessfullySignedIn()
    {
        //Arrange
        var signUpSchema = new SignUpSchema() { FirstName = "Test", LastName = "Test", Email = "Dennis@domain.com", Password = "BytMig123!" };
        var dummyData = new ServiceRequest<SignUpSchema>
        {
            Content = signUpSchema
        };
        await _injectFixture._authService.SignUpAsync(dummyData);

        var signInschema = new SignInSchema() { Email = "Dennis@domain.com", Password = "BytMig123!", RememberMe = false };
        var request = new ServiceRequest<SignInSchema>
        {
            Content = signInschema
        };
        //Act
        var result = await _injectFixture._authService.SignInAsync(request);


        //Assert
        Assert.Equal(200, (int)result.StatusCode);

        _injectFixture.Dispose();
    }
}
