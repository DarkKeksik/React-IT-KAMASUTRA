import React from "react";
import classes from "./Frends.module.css";
import Friend from "./Friend/Friend";

function Friends(props) {

    let FriendJsx = props.friends.map( (i) => <Friend name={i.name} avatar={i.avatar} /> );

    return (
        <div className={classes.friends}>
            <h3 className={classes.friends__title}>Друзья</h3>
            <p className={classes.friends__all}>
                { FriendJsx }
            </p>
        </div>
    );
}

export default Friends;