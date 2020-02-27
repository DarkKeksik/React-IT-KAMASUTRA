import React from "react";
import classes from "./ProfileStatistics.module.css";

function ProfileStatistics() {
    return (
        <div className={`${classes.profileBg__statistics}`}>
            Музыграммов: <span>1</span>
        </div>
    )
}

export default ProfileStatistics;