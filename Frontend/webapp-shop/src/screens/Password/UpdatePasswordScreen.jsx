import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';

const UpdatePasswordScreen = () => {
    const location = useLocation();
    const [passwordUpdateDto, setPasswordUpdateDto] = useState({
      email: "",
      token: "",
      newPassword: ""
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (passwordUpdateDto.newPassword !== confirmPassword) {
        setError('Passwords do not match');
        console.log(passwordUpdateDto.newPassword);
        console.log(confirmPassword);
        return;
      } else {

        passwordUpdateDto.token = decodeURIComponent(new URLSearchParams(location.search).get('token'));
        passwordUpdateDto.email = decodeURIComponent(new URLSearchParams(location.search).get('email'));

      }
  
      try {
        const response = await fetch('https://localhost:7042/api/email/updatePassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(passwordUpdateDto),
        });
  
        if (response.ok) {

          setError('Password Changed');
        } else {

          const responseData = await response.text();
          console.log(responseData);
          setError(responseData.message || 'Failed to update password');
        }
      } catch (error) {
        console.error('Error updating password:', error);
        setError('An unexpected error occurred');
      }
    };
  
    return (
      <div>
        <h2>Update Password</h2>
        <form onSubmit={handleSubmit}>
          <label>New Password:</label>
          <input
            type="password"
            value={passwordUpdateDto.newPassword}
            onChange={(e) => setPasswordUpdateDto({ ...passwordUpdateDto, newPassword: e.target.value })}
          />
          <br />
  
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
  
          {error && <div style={{ color: 'red' }}>{error}</div>}
  
          <button type="submit">Update Password</button>
        </form>
      </div>
    );
};

export default UpdatePasswordScreen;
