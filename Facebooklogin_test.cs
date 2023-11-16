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
public class FacebookLoginScriptTests
{
    [TestMethod]
    public void StatusChangeCallbackHandlesConnectedStatus()
    {
        // Mock the FB object
        var mockFB = new Mock<IFacebookAPI>(); // Create an interface for the Facebook API and mock it
        mockFB.Setup(fb => fb.GetLoginStatus(It.IsAny<Action<FacebookStatusCallback>>()))
              .Callback<Action<FacebookStatusCallback>>(callback =>
              {
                  callback(new FacebookStatusCallback { Status = "connected" });
              });

        // Create an instance of the component and inject the mocked FB object
        var facebookLoginScript = new FacebookLoginScript(mockFB.Object);

        // Call the relevant method in your component that initiates the login
        // e.g., facebookLoginScript.InitiateLogin();

        // Assert: Perform your assertions here to ensure that the component behaves as expected
        // Example: Assert.AreEqual("Thanks for logging in, John Doe!", facebookLoginScript.StatusMessage);
    }
}
