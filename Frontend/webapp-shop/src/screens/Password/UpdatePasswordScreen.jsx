import { useLocation, useNavigate } from "react-router-dom";
import { isPassword, isConfirmPassword } from "../../utils/validation";
import { useInputField } from "../../hooks/useInput";
import StyledInput from "../../components/Input/StyledInput";

const UpdatePasswordScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const passwordField = useInputField("", isPassword);
    const confirmPasswordField = useInputField(
        "",
        isConfirmPassword.bind(null, passwordField.value)
    );

    const updatePassword = async (passwordUpdateDto) => {
        try {
            const response = await fetch(
                "https://localhost:7042/api/email/updatePassword",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(passwordUpdateDto),
                }
            );
            if (response.ok) {
                navigate("/signin");
            }
        } catch (error) {
            console.error("Error updating password:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            confirmPasswordField.handleSubmit() &&
            passwordField.handleSubmit()
        ) {
            const passwordUpdateDto = {
                email: decodeURIComponent(
                    new URLSearchParams(location.search).get("email")
                ),
                token: decodeURIComponent(
                    new URLSearchParams(location.search).get("token")
                ),
                newPassword: passwordField.value,
            };
            await updatePassword(passwordUpdateDto);
        }
    };
    return (
        <section className="registrate-user">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-11 col-md-5">
                        <h1>New Password</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="d-flex flex-column align-items-center"
                        >
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
                            <button type="submit">Update Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdatePasswordScreen;
