import React from "react";
import { Link } from "react-router-dom";
import {
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoGooglePlus,
} from "react-icons/bi";
import { RxCross2, RxCheck } from "react-icons/rx";
const RegistrateUser = () => {
    return (
        <section className="registrate-user">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-11 col-md-5">
                        <h1>Sign Up</h1>
                        <form className="d-flex flex-column align-items-center">
                            <div className="registrate-input-group">
                                <label
                                    className="registrate-user-label"
                                    htmlFor="firstname"
                                >
                                    First Name
                                </label>
                                <div className="registrate-icon-input-container">
                                    <input
                                        className="registrate-user-input"
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter your First Name"
                                    />
                                    <RxCross2 className="registrate-user-icon cross-icon" />
                                </div>
                            </div>

                            <div className="registrate-input-group">
                                <label
                                    className="registrate-user-label"
                                    htmlFor="lastname"
                                >
                                    Last Name
                                </label>
                                <div className="registrate-icon-input-container">
                                    <input
                                        className="registrate-user-input"
                                        type="text"
                                        id="lastname"
                                        placeholder="Enter your Last Name"
                                    />
                                    <RxCross2 className="registrate-user-icon cross-icon" />
                                </div>
                            </div>

                            <div className="registrate-input-group">
                                <label
                                    className="registrate-user-label"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <div className="registrate-icon-input-container">
                                    <input
                                        className="registrate-user-input"
                                        type="email"
                                        id="email"
                                        placeholder="Johndoe@domain.com"
                                    />
                                    <RxCross2 className="registrate-user-icon cross-icon" />
                                </div>
                            </div>

                            <div className="registrate-input-group">
                                <label
                                    className="registrate-user-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="registrate-icon-input-container">
                                    <input
                                        className="registrate-user-input"
                                        type="password"
                                        id="password"
                                        placeholder="Your password"
                                    />
                                    <RxCheck className="registrate-user-icon check-icon" />
                                </div>
                            </div>

                            <div className="registrate-input-group">
                                <label
                                    className="registrate-user-label"
                                    htmlFor="confirmpassword"
                                >
                                    Confirm Password
                                </label>
                                <div className="registrate-icon-input-container">
                                    <input
                                        className="registrate-user-input"
                                        type="password"
                                        id="confirmpassword"
                                        placeholder="Confirm password"
                                    />
                                    <RxCheck className="registrate-user-icon check-icon" />
                                </div>
                            </div>
                            <div className="sign-up-button"></div>
                            <button>Sign up</button>
                        </form>
                        <Link to="SignIn">
                            Already have an account? Sign in
                        </Link>
                        <div className="social-media-icons">
                            <Link to="/facebook">
                                <BiLogoFacebook id="facebook-icon" />
                            </Link>
                            <Link to="/twitter">
                                <BiLogoTwitter id="twitter-icon" />
                            </Link>
                            <Link to="/google">
                                <BiLogoGooglePlus id="google-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrateUser;
