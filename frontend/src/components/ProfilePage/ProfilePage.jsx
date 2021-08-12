import React from 'react';
import "./ProfilePage.css";

const ProfilePage = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Profile</h2>
        <h4>Username</h4>
        <p>Vince</p>
        <h4>Email</h4>
        <p>vincentyan1@gmail.com</p>
        <h4>DOB</h4>
        <p>2-7-1985</p>
        
      </div>
    </div>
  )
}

export default ProfilePage
