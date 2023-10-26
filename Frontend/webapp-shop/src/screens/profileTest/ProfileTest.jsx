import React, { useEffect, useState } from 'react';
import { getProfile } from '../../contexts/api'; // Import the getProfile function

const UserProfile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userProfile = await getProfile(); // Call the getProfile function
                setProfile(userProfile);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures this effect runs only once

    return (
        <div>
            {profile ? (
                <div>
                    <p>Email: {profile.email}</p>
                    <p>Förnamn: {profile.firstName}</p>
                    <p>Efternamn: {profile.lastName}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default UserProfile;