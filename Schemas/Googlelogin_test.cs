using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Manero.Interfaces;
using Manero.Models.Contexts;
using Manero.Repos;
using Manero.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;


[TestClass]
public class GoogleLoginComponentTests
{
    [TestMethod]
    public void RendersGoogleLoginButton()
    {
        // Arrange
        var googleLoginComponent = new GoogleLoginComponent();

        // Act & Assert
        Assert.AreEqual("Login with Google", googleLoginComponent.GetButtonText());
    }

    [TestMethod]
    public void CallsOnSuccessWhenGoogleLoginIsSuccessful()
    {
        // Arrange
        var mockedOnSuccess = new Mock<Action<GoogleLoginResponse>>();
        var googleLoginComponent = new GoogleLoginComponent(mockedOnSuccess.Object);

        // Mock the GoogleLogin API with the specified onSuccess handler
        Mock<IGoogleLoginAPI> mockGoogleLoginAPI = new Mock<IGoogleLoginAPI>();
        mockGoogleLoginAPI.Setup(api => api.Login(It.IsAny<Action<GoogleLoginResponse>>()))
                          .Callback<Action<GoogleLoginResponse>>(callback =>
                          {
                              callback(new GoogleLoginResponse { Name = "John Doe", Email = "john.doe@example.com" });
                          });

        googleLoginComponent.SetGoogleLoginAPI(mockGoogleLoginAPI.Object);

        // Act
        googleLoginComponent.HandleGoogleLogin();

        // Assert
        mockedOnSuccess.Verify(onSuccess => onSuccess(It.IsAny<GoogleLoginResponse>()), Times.Once());
    }

    [TestMethod]
    public void CallsOnFailureWhenGoogleLoginFails()
    {
        // Arrange
        var mockedOnFailure = new Mock<Action<GoogleLoginResponse>>();
        var googleLoginComponent = new GoogleLoginComponent(null, mockedOnFailure.Object);

        // Mock the GoogleLogin API with the specified onFailure handler
        Mock<IGoogleLoginAPI> mockGoogleLoginAPI = new Mock<IGoogleLoginAPI>();
        mockGoogleLoginAPI.Setup(api => api.Login(It.IsAny<Action<GoogleLoginResponse>>()))
                          .Callback<Action<GoogleLoginResponse>>(callback =>
                          {
                              callback(new GoogleLoginResponse { Error = "Some error" });
                          });

        googleLoginComponent.SetGoogleLoginAPI(mockGoogleLoginAPI.Object);

        // Act
        googleLoginComponent.HandleGoogleLogin();

        // Assert
        mockedOnFailure.Verify(onFailure => onFailure(It.IsAny<GoogleLoginResponse>()), Times.Once());
    }
}
