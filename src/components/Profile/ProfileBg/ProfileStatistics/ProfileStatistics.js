import React from "react";
import classes from "./ProfileStatistics.module.css";

function ProfileStatistics() {
    return (
        <div class={`${classes.profileBg__statistics}`}>
            Музыграммов: <span>105</span>
        </div>
    )
}

export default ProfileStatistics;