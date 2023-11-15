import { Link } from "react-router-dom";
import {
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoGooglePlus,
} from "react-icons/bi";
import { useAuthContext } from "../../contexts/AuthContext";
import StyledInput from "../Input/StyledInput";
import { isName, isEmail, isConfirmPassword, isPassword } from "../../utils/validation";
import { useInputField } from "../../hooks/useInput";

const RegistrateUser = ({ setSuccess }) => {
    const { signUp } = useAuthContext();
    const firstNameField = useInputField("", isName);
    const lastNameField = useInputField("", isName);
    const emailField = useInputField("", isEmail);
    const passwordField = useInputField("", isPassword);
    const confirmPasswordField = useInputField("", isConfirmPassword.bind(null, passwordField.value));
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmailValid = await emailField.handleSubmit();
        const isPasswordValid = await passwordField.handleSubmit();
        const isFirstNameValid = await firstNameField.handleSubmit();
        const isLastNameValid = await lastNameField.handleSubmit();
        const isConfirmPasswordValid = await confirmPasswordField.handleSubmit();

        if (isEmailValid || isPasswordValid || isFirstNameValid || isLastNameValid || isConfirmPasswordValid) {
            const registrateUser = {
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value,
            };

            await signUp(registrateUser, setSuccess);
        }
    };
    

    return (
        <section className="registrate-user">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-11 col-md-5">
                        <h1>Sign Up</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="d-flex flex-column align-items-center"
                        >
                            <StyledInput
                                label="Firstname"
                                id="firstname"
                                type="text"
                                name="firstname"
                                onChange={firstNameField.handleOnChange}
                                value={firstNameField.value}
                                errorMessage={
                                    firstNameField.onSubmitHasError &&
                                    "Please enter a First name"
                                }
                                isValid={!firstNameField.onChangeHasError}
                            />
                            <StyledInput
                                label="Lastname"
                                id="lastname"
                                type="text"
                                name="lastname"
                                onChange={lastNameField.handleOnChange}
                                value={lastNameField.value}
                                errorMessage={
                                    lastNameField.onSubmitHasError &&
                                    "Please enter a last name"
                                }
                                isValid={!lastNameField.onChangeHasError}
                            />

                            <StyledInput
                                label="Email"
                                id="email"
                                type="text"
                                name="email"
                                onChange={emailField.handleOnChange}
                                value={emailField.value}
                                errorMessage={
                                    emailField.onSubmitHasError &&
                                    "Please enter a valid email"
                                }
                                isValid={!emailField.onChangeHasError}
                            />

                            <StyledInput
                                label="Password"
                                id="password"
                                type="password"
                                name="password"
                                onChange={passwordField.handleOnChange}
                                value={passwordField.value}
                                errorMessage={
                                    passwordField.onSubmitHasError &&
                                    "Please enter a valid password"
                                }
                                isValid={!passwordField.onChangeHasError}
                            />

                            <StyledInput
                                label="Confirm Password"
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                onChange={confirmPasswordField.handleOnChange}
                                value={confirmPasswordField.value}
                                errorMessage={
                                    confirmPasswordField.onSubmitHasError &&
                                    "Passwords must be the same"
                                }
                                isValid={!confirmPasswordField.onChangeHasError}
                            />
                            <div className="sign-up-button"></div>
                            <button>Sign up</button>
                        </form>
                        <Link to="/SignIn">
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
