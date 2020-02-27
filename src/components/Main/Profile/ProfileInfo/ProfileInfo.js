import React from "react";
import classes from "./ProfileInfo.module.css";

function ProfileInfo () {
    return (
        <div className={`${classes.profile__info}`}>
            <img
                src={"https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4"}
                className={`${classes.profile__logo}`}
                alt={"Logo"}
            />
            <div className={`${classes.profile__generalInfo}`}>
                <h2 className={`${classes.profile__name}`}>DarkKeksik</h2>
                <h3 className={`${classes.profile__statusText}`}>Какой то статус</h3>
            </div>
        </div>
    )
}

export default ProfileInfo;