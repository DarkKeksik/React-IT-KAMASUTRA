import React from "react";
import classes from "./ProfileInfo.module.css";

function ProfileInfo (props) {
    return (
        <div className={`${classes.profile__info}`}>
            <img
                src={props.avatar}
                className={`${classes.profile__logo}`}
                alt={"Logo"}
            />
            <div className={`${classes.profile__generalInfo}`}>
                <h2 className={`${classes.profile__name}`}>{props.name}</h2>
                <h3 className={`${classes.profile__statusText}`}>{props.status}</h3>
            </div>
        </div>
    )
}

export default ProfileInfo;