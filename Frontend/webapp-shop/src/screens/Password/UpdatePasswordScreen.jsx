import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import { validateOnChange, validateOnSubmit } from "../../components/RegistrateUser/RegistrateUserValidation";
import { useNavigate } from 'react-router-dom';

const UpdatePasswordScreen = () => {
    const location = useLocation();
    const [passwordUpdate, setPasswordUpdate] = useState({
      email: "",
      token: "",
      password: "",
      confirmPassword: ""
    });
    
    const [error, setError] = useState('');
    const [formErrorIcons, setFormErrorIcons] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setPasswordUpdate((previousState) => ({
        ...previousState,
        [name]: value,
      }));
      var errorIcons = validateOnChange({ ...passwordUpdate, [name]: value });
      setFormErrorIcons(errorIcons);
    
      setFormErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    };
    
    const updatePassword = async (passwordUpdateDto) => {
      try {
        const response = await fetch('https://localhost:7042/api/email/updatePassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(passwordUpdateDto),
        });
        if (response.ok) {
          navigate("/signin")
        }
        else {
          const responseData = await response.text();
          setError(responseData.message || 'Failed to update password');
        }

      } catch (error) {
        console.error('Error updating password:', error);
        setError('An unexpected error occurred');
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const errors = validateOnSubmit(passwordUpdate);
    
      const passwordUpdateDto = {
        email: decodeURIComponent(new URLSearchParams(location.search).get('email')),
        token: decodeURIComponent(new URLSearchParams(location.search).get('token')),
        newPassword: passwordUpdate.password,
      };
    
      if (Object.keys(errors).length === 0 && Object.keys(error).length === 0) {
        await updatePassword(passwordUpdateDto);
      } else {
        setFormErrors(errors);
      }
    };
    
  
    return (
      <section className="registrate-user">
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-11 col-md-5">
                        <h1>New Password</h1>
                        <h2>{error}</h2>
                        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
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
                                        value={passwordUpdate.password}
                                        className="registrate-user-input"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        name="password"
                                    />
                                    {formErrorIcons.passwordIcon}
                                </div>
                                <div className="error-message">{formErrors.password}</div>
                            </div>
                            <div className="registrate-input-group">
                                <label
                                    className="registrate-user-label"
                                    htmlFor="confirmPassword"
                                >
                                    Password
                                </label>
                                <div className="registrate-icon-input-container">
                                    <input
                                        onChange={handleOnChange}
                                        value={passwordUpdate.confirmPassword}
                                        className="registrate-user-input"
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm your password"
                                        name="confirmPassword"
                                    />
                                    {formErrorIcons.confirmPasswordIcon}
                                </div>
                                <div className="error-message">{formErrors.confirmPassword}</div>
                            </div>
                            <button type="submit">
                                Update Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdatePasswordScreen;