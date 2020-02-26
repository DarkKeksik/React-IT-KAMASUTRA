import React from "react";
import classes from "./ProfileBg.module.css";

import ProfileStatistics from "./ProfileStatistics/ProfileStatistics";

function ProfileBg () {
    return (
        <div className={`${classes.profile__bg} ${classes.profile__bg_center}`}>
            <ProfileStatistics />
        </div>
    )
}

export default ProfileBg;