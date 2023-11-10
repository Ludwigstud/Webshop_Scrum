import React, { useState } from 'react';

const PasswordResetScreen = () => {
    const [resetEmailSchema, setResetEmailSchema] = useState({ email: '' });

    const handleResetPassword = async () => {
      try {
        const response = await fetch('https://localhost:7042/api/Email/resetpassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(resetEmailSchema),
        });
  
        if (response.ok) {
          console.log('Password reset email sent successfully!');
        } else {
          console.error('Failed to send password reset email');
        }
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };
  
    return (
      <div>
        <h2>Password Reset</h2>
        <label>Email:</label>
        <input
          type="email"
          value={resetEmailSchema.email}
          onChange={(e) => setResetEmailSchema({ email: e.target.value })}
        />
        <button onClick={handleResetPassword}>Send Reset Email</button>
      </div>
    );
  };
export default PasswordResetScreen;
