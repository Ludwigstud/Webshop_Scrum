import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginComponent = () => {
    // Handle successful login
    const responseGoogleSuccess = (response) => {
        console.log('Login successful:', response);
        // You can send user information to the backend or perform other actions here
    };

    // Handle login failure
    const responseGoogleFailure = (response) => {
        console.log('Login failed:', response);
    };

    return (
        <div>
            {/* Google Login Button */}
            <GoogleLogin
                clientId="58830595305-9qjtqlsdkou36ghavo1vd5ru24980r6n.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default GoogleLoginComponent;
