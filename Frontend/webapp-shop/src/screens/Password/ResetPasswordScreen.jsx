import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledInput from "../../components/Input/StyledInput";
import { isEmail } from "../../utils/validation";
import { useInputField } from "../../hooks/useInput";

const PasswordResetScreen = () => {
    const navigate = useNavigate();
    const emailField = useInputField("", isEmail);

    const resetPassword = async (schema) => {
        try {
            const response = await fetch(
                "https://localhost:7042/api/Email/resetpassword",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(schema),
                }
            );

            if (response.ok) {
                navigate("/signin");
            } else {
                console.error("Failed to send password reset email");
            }
        } catch (error) {
            console.error("An error occurred:", error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmailValid = await emailField.handleSubmit();
       if(isEmailValid){
        const emailReset  = {
            email: emailField.value
        };
        await resetPassword(emailReset);
       }
       
    };

    return (
        <section className="registrate-user">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-11 col-md-5">
                        <h1>Reset Password</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="d-flex flex-column align-items-center"
                        >
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
                            <button type="submit">Send Reset Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PasswordResetScreen;
