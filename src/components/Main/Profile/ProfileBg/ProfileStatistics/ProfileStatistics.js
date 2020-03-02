import React from "react";
import classes from "./ProfileStatistics.module.css";

function ProfileStatistics(props) {
    return (
        <div className={`${classes.profileBg__statistics}`}>
            Музыграммов: <span>{props.musicPosts}</span>
        </div>
    )
}

export default ProfileStatistics;