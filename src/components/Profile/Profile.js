import React from "react";
import classes from "./Profile.module.css";

import ProfileBg from "./ProfileBg/ProfileBg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={`${classes.profile}`}>
            <ProfileBg />
            <ProfileInfo />
        </div>
    );
}

export default Profile;