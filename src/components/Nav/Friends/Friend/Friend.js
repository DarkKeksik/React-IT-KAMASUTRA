import React from "react";
import classes from "./Friend.module.css";
import {NavLink} from "react-router-dom";

function Friend(props) {
    return (
        <NavLink
            to={"#"}
            className={classes.friend}
            style={{backgroundImage: `url(${props.avatar})`}}
            title={props.name}
        />
    )
}

export default Friend;