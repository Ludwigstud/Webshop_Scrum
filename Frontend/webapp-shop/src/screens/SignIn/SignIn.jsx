import React, { useState } from "react";
import { RxCross2, RxCheck } from "react-icons/rx";
import { AiFillEyeInvisible } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGooglePlus,
} from "react-icons/bi";
import { Link } from "react-router-dom";
function RegistrateUser() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  let signInData = {
    data: {
      Email: email,
      Password: password,
    },
  };

  function signInSubmit() {
    console.log(signInData);
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
  }
  return (
    <section className="register-user">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign-in-title">
              <h1>Welcome Back!</h1>
              <p>Sign in to continue</p>
            </div>
            <div className="col-12">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (e.target.checkValidity()) {
                    signInSubmit();
                  }
                }}
                className="col-10 col-md-4"
              >
                <div className="registrate-input-group">
                  <label className="registrate-user-label" htmlFor="firstname">
                    Email
                  </label>
                  <div className="registrate-icon-input-container">
                    <input
                      className="registrate-user-input"
                      type="text"
                      id="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <RxCross2 className="registrate-user-icon" />
                  </div>
                </div>
                <div className="registrate-input-group">
                  <label className="registrate-user-label" htmlFor="firstname">
                    Password
                  </label>
                  <div className="registrate-icon-input-container">
                    <input
                      className="registrate-user-input"
                      type="text"
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <AiFillEyeInvisible className="registrate-user-icon" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="col-5 checkbox">
                    <input type="checkbox" />
                    <small>Remeber me</small>
                  </div>
                  <div className="col-5 forgot-password">
                    <Link to="/">
                      <small>Forgot password?</small>
                    </Link>
                  </div>
                </div>
                <button type="submit" className="sign-in-button btn">
                  Sign in
                </button>
              </form>
              <div className="col-12 col-md-9 register-link">
                <div className="col-10 col-md-5">
                  <Link to="/">
                    <small>Don't have an account yet? Sign up.</small>
                  </Link>
                </div>
              </div>
              <div className="social-media-icons col-10 col-md-5">
                <div className="col-3">
                  <Link to="/facebook">
                    <BiLogoFacebook id="facebook-icon" />
                  </Link>
                </div>
                <div className="col-3">
                  <Link to="/twitter">
                    <BiLogoTwitter id="twitter-icon" />
                  </Link>
                </div>
                <div className="col-3">
                  <Link to="/google">
                    <BiLogoGooglePlus id="google-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrateUser;
