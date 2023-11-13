import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoGooglePlus,
} from "react-icons/bi";
import { useAuthContext } from '../../contexts/AuthContext';
import {validateOnChange, validateOnSubmit} from './RegistrateUserValidation';

const RegistrateUser = ({setSuccess}) => {
    const {signUp} = useAuthContext();
    const [registrateForm, setRegistrateForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: ""});
    const [formErrorIcons, setFormErrorIcons] = useState({});
    const [formErrors, setFormErrors] = useState({});


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setRegistrateForm(previousState => {
            return { ...previousState, [name]: value };
        });
        var errorIcons = validateOnChange({ ...registrateForm, [name]: value });
        setFormErrorIcons(errorIcons);

        setFormErrors(previousErrors => ({
            ...previousErrors,
            [name]: ""
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateOnSubmit(registrateForm);
        const registrateUser  = {
            firstName: registrateForm.firstName,
            lastName: registrateForm.lastName,
            email: registrateForm.email,
            password: registrateForm.password
        };
        if(Object.keys(errors).length === 0)
        {
            await signUp(registrateUser, setSuccess);
        }
        else {
            setFormErrors(errors);
        }
    }

    return (
        <section className="registrate-user">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-11 col-md-5">
                        <h1>Sign Up</h1>
                        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                            <div className="registrate-input-group">
                                <label
                                    className="registrate-user-label"
                                    htmlFor="firstname"
                                >
                                    First Name
                                </label>
                                <div className="registrate-icon-input-container">
                                    <input
                                        onChange={handleOnChange}
                                        value={registrateForm.firstName}
                                        className="registrate-user-input"
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter your First Name"
                                        name="firstName"
                                    />
                                    {formErrorIcons.firstNameIcon}
                                </div>
                                <div className="error-message">{formErrors.firstName}</div>
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
                                        onChange={handleOnChange}
                                        value={registrateForm.lastName}
                                        className="registrate-user-input"
                                        type="text"
                                        id="lastname"
                                        placeholder="Enter your Last Name"
                                        name="lastName"
                                    />
                                    {formErrorIcons.lastNameIcon}
                                </div>
                                <div className="error-message">{formErrors.lastName}</div>
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
                                        onChange={handleOnChange}
                                        value={registrateForm.email}
                                        className="registrate-user-input"
                                        type="text"
                                        id="email"
                                        placeholder="Johndoe@domain.com"
                                        name="email"
                                    />
                                    {formErrorIcons.emailIcon}
                                </div>
                                <div className="error-message">{formErrors.email}</div>
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
                                        onChange={handleOnChange}
                                        value={registrateForm.password}
                                        className="registrate-user-input"
                                        type="password"
                                        id="password"
                                        placeholder="Your password"
                                        name="password"
                                    />
                                    {formErrorIcons.passwordIcon}
                                </div>
                                <div className="error-message">{formErrors.password}</div>
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
                                        onChange={handleOnChange}
                                        value={registrateForm.confirmPassword}
                                        className="registrate-user-input"
                                        type="password"
                                        id="confirmpassword"
                                        placeholder="Confirm password"
                                        name="confirmPassword"
                                    />
                                    {formErrorIcons.confirmPasswordIcon}
                                </div>
                                <div className="error-message">{formErrors.confirmPassword}</div>
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
