import React, { useState } from "react";
import { validateOnChange, validateOnSubmit } from "../../components/RegistrateUser/RegistrateUserValidation";
import { useNavigate } from "react-router-dom";

const PasswordResetScreen = () => {
    const [resetEmailSchema, setResetEmailSchema] = useState({ email: "" });
    const [formErrorIcons, setFormErrorIcons] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setResetEmailSchema(previousState => {
          return { ...previousState, [name]: value };
      });
      var errorIcons = validateOnChange({ ...resetEmailSchema, [name]: value });
      setFormErrorIcons(errorIcons);

      setFormErrors(previousErrors => ({
          ...previousErrors,
          [name]: ""
      }));
  }


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
  }


    const handleSubmit = async (e) => {
      e.preventDefault();
      const errors = validateOnSubmit(resetEmailSchema);
      const emailReset  = {
          email: resetEmailSchema.email
      };
      console.log(Object.keys(errors).length)
      if(Object.keys(errors).length === 0)
      {
        console.log("röv")
          await resetPassword(emailReset);

      }
      else {
          setFormErrors(errors);
      }
    };

    return (
        <section className="registrate-user">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-11 col-md-5">
                        <h1>Reset Password</h1>
                        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
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
                                        value={resetEmailSchema.email}
                                        className="registrate-user-input"
                                        type="text"
                                        id="email"
                                        placeholder="Enter your email"
                                        name="email"
                                    />
                                    {formErrorIcons.emailIcon}
                                </div>
                                <div className="error-message">{formErrors.email}</div>
                            </div>
                            <button type="submit">
                                Send Reset Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PasswordResetScreen;
