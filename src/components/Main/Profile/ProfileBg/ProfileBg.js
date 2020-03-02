import React from "react";
import classes from "./ProfileBg.module.css";

import ProfileStatistics from "./ProfileStatistics/ProfileStatistics";

function ProfileBg (props) {
    return (
        <div
            className={`${classes.profile__bg} ${classes.profile__bg_center}`}
            style={{backgroundImage: `url(${props.src})`}}
        >
            <ProfileStatistics musicPosts={props.musicPosts}  />
        </div>
    )
}

export default ProfileBg;