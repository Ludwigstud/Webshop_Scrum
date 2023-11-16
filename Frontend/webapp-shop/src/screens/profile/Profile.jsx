
import React, { useEffect, useState } from 'react';
import { getProfile } from '../../contexts/api';
import { useAuthContext } from "../../contexts/AuthContext"
import { Link, useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../helpers/getAccessToken';


const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { signout } = useAuthContext();
  const navigate = useNavigate();
  const token = getAccessToken();

  const userSignOut = () => {
    signout();
    navigate("/signin");
  }

  useEffect(() => {
    if(token){
      const fetchData = async () => {
        try {
            const userProfile = await getProfile(); 
            setProfile(userProfile);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    fetchData();
    }
    else {
      navigate("/signin")
    }
      
  }, [navigate, token]); 

 
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
        <div className='menu'>
          <div className='option'>
          <Link>
            <div className='left'>
              <i className='fa-regular fa-calendar'></i>
              <p>Order history</p>
            </div>
            <i className='fa-solid fa-chevron-right'></i>
            </Link>
          </div>
          <div className='option'>
          <Link to={"/profile/paymentmethods"}>
            <div className='left'>
              <i className='fa-regular fa-credit-card'></i>
              <p>Payment method</p>
            </div>
            <i className='fa-solid fa-chevron-right'></i>
            </Link>
          </div>
          <div className='option'>
          <Link to={"/profile/address"}>
            <div className='left'>
              <i className='fa-solid fa-location-dot'></i>
              <p>My address</p>
            </div>
            <i className='fa-solid fa-chevron-right'></i>
            </Link>
          </div>
          <div className='option'>
          <Link>
            <div className='left'>
              <i className='fa-solid fa-gift'></i>
              <p>My promocodes</p>
            </div>
            <i className='fa-solid fa-chevron-right'></i>
            </Link>
          </div>
  
          

          <div className="option last-border" id="signOut" onClick={userSignOut}>
            <Link>
            <div className="left">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>

              <p>Sign out</p>
            </div>
            <i className='fa-solid fa-chevron-right'></i>
            </Link>
          </div>
        </div>


         

        

      </div>
      
    </div>
    </>
  );
};

export default Profile;
