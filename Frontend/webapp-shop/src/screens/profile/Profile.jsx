import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import NavBottomReplace from "../../components/dummyNavBar/NavBottomReplace";
import NavTopReplace from "../../components/dummyNavBar/NavTopReplace";
import { getProfile } from '../../contexts/api';
import { useAuthContext } from "../../contexts/AuthContext"

const Profile = () => {


  const [profile, setProfile] = useState(null);
  const { signout } = useAuthContext();

  useEffect(() => {
      const fetchData = async () => {
          try {
              const userProfile = await getProfile(); 
              setProfile(userProfile);
          } catch (error) {
              console.error('Error fetching user profile:', error);
          }
      };

      fetchData();
  }, []); 

 
  return (
    <>
    <div className="profile">
    <div className="container">
      <div className="avatar-name-mail">
        <p className="avatar">?</p>
        <i className="fa-solid fa-pencil edit"></i>
        {profile ? (
          <>
            <h6 className="name">{profile.firstName} {profile.lastName}</h6>
            <p className="email">{profile.email}</p>
          </>
        ) : (
          <p>Loading...</p> 
        )}
      </div>

        <div className="menu">
          <div className="option">
            <div className="left">
              <i className="fa-regular fa-calendar"></i>
              <p>Order history</p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="option">
            <div className="left">
              <i className="fa-regular fa-credit-card"></i>
              <p>Payment method</p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="option">
            <div className="left">
              <i className="fa-solid fa-location-dot"></i>
              <p>My address</p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="option">
            <div className="left">
              <i className="fa-solid fa-gift"></i>
              <p>My promocodes</p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="option last-border" id="signOut" onClick={signout}>
            <div className="left">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Sign out</p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>

         

        
      </div>
      
    </div>
    <NavBottomReplace/>
    </>
  );
};

export default Profile;
