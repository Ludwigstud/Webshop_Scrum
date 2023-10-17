import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import NavBottomReplace from "./NavBottomReplace";
import NavTopReplace from "./NavTopReplace";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <NavTopReplace/>
        <div className="avatar-name-mail">
          <p className="avatar">?</p>
          <i className="fa-solid fa-pencil edit"></i>

          <h6 className="name">Benny Billyson</h6>

          <p className="email">Bennybillyson@mail.com</p>
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
          <div className="option last-border">
            <div className="left">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Sign out</p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>

         <NavBottomReplace/>

        
      </div>
    </div>
  );
};

export default Profile;
