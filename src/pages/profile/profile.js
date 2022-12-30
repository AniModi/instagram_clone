import React from 'react';
import "./profile.css"
import profilePhoto from "./../../images/placeHolderProfile.jpg"
const Profile = () => {
    return(
    <>
    <div id="profile">
        <div id="info">
            <div id="profilePhoto">
                <img src={profilePhoto} alt="profilePhoto"></img>
            </div>
            <div id="otherInfo">
                <div id="username_info">
                    <p id="username">
                        {"User"}
                    </p>
                    <div id="edit-btn-div">
                        <button id="edit-btn">{"Edit profile"}</button>
                    </div>
                </div>
                <div id="stats">
                    <div id='numberOfPost'><span>{"0"}</span>{" Posts"}</div>
                    <div id='numberOfFollowers'><span>{"0"}</span>{" Followers"}</div>
                    <div id='numberOfFollowing'><span>{"0"}</span>{" Following"}</div>
                </div>
                <div id="bio">mlmmspmps</div>
            </div>
        </div>
        <div id="uploads">
            <div id="posts"></div>
        </div>
    </div>
    </>
    );
}

export default Profile;

