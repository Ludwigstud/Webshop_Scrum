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
		// Mocka FB-objektet
		var mockFB = new Mock<IFacebookAPI>(); // Skapa ett gränssnitt för Facebook API och mocka det
		mockFB.Setup(fb => fb.GetLoginStatus(It.IsAny<Action<FacebookStatusCallback>>()))
			  .Callback<Action<FacebookStatusCallback>>(callback =>
			  {
				  callback(new FacebookStatusCallback { Status = "connected" });
			  });

		// Skapa instansen av komponenten och injicera det mockade FB-objektet
		var facebookLoginScript = new FacebookLoginScript(mockFB.Object);

		// Kalla på den relevanta metoden i din komponent som initierar inloggningen
		// t.ex., facebookLoginScript.InitiateLogin();

		// Assert: Gör ditt assertions här för att säkerställa att komponenten beter sig som förväntat
		// Exempel: Assert.AreEqual("Thanks for logging in, John Doe!", facebookLoginScript.StatusMessage);
	}
}
