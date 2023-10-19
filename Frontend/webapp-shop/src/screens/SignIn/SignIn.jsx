import React, { useState } from "react";
import { RxCross2, RxCheck } from "react-icons/rx";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGooglePlus,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
function SignIn() {
  const { signIn } = useAuthContext();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [loginChecker, setLoginChecker] = useState(null);
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleChange = () => {
    const emailInput = document.getElementById("email");
    setEmail(emailInput.value)
    if(mailformat.test(emailInput.value)){
      setValidEmail(true)
    }
    else{
      setValidEmail(false)
    }
  }

  const handleCheckBoxChange = (e) => {
    setRememberMe(e.target.checked);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signInSchema = { email, password, rememberMe };
    await signIn(signInSchema, setLoginChecker, loginChecker);
  };

  const togglePassword = () =>{
    setShowPassword(!showPassword);
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
              <form onSubmit={handleSubmit} className="col-10 col-md-4">
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
                      onChange={() => handleChange()}
                    />
                    {!validEmail ? <RxCross2 className="registrate-user-icon text-danger"/> : <RxCheck className="registrate-user-icon text-success"/>}
                  </div>
                </div>
                <div className="registrate-input-group">
                  <label className="registrate-user-label" htmlFor="firstname">
                    Password
                  </label>
                  <div className="registrate-icon-input-container">
                    <input
                      className="registrate-user-input"
                      type={!showPassword ? "password" : "text"}
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {!showPassword ? <AiFillEyeInvisible onClick={() => togglePassword()} className="registrate-user-icon" /> : <AiFillEye onClick={() => togglePassword()} className="registrate-user-icon"/>}
                  </div>
                </div>
                <div className="d-flex text-center justify-content-center">
                  {loginChecker === false ? (
                    <p className="text-danger">Incorrect email or password</p>
                  ) : loginChecker === true ? (
                    <p className="text-danger">Enter your email and password</p>
                  ) : loginChecker === null ? (
                    <p></p>
                  ) : null}
                </div>
                <div className="col-12">
                  <div className="col-5 checkbox">
                    <input type="checkbox" onChange={handleCheckBoxChange}/>
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
                  <Link to="/register">
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
export default SignIn;
