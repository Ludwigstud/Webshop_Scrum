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
		var mockFB = new Mock<IFacebookAPI>(); // Skapa ett gr�nssnitt f�r Facebook API och mocka det
		mockFB.Setup(fb => fb.GetLoginStatus(It.IsAny<Action<FacebookStatusCallback>>()))
			  .Callback<Action<FacebookStatusCallback>>(callback =>
			  {
				  callback(new FacebookStatusCallback { Status = "connected" });
			  });

		// Skapa instansen av komponenten och injicera det mockade FB-objektet
		var facebookLoginScript = new FacebookLoginScript(mockFB.Object);

		// Kalla p� den relevanta metoden i din komponent som initierar inloggningen
		// t.ex., facebookLoginScript.InitiateLogin();

		// Assert: G�r ditt assertions h�r f�r att s�kerst�lla att komponenten beter sig som f�rv�ntat
		// Exempel: Assert.AreEqual("Thanks for logging in, John Doe!", facebookLoginScript.StatusMessage);
	}
}
