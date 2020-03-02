import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <NavLink
            activeClassName={classes.dialogPanel__item_active}
            className={classes.dialogPanel__item}
            to={`/dialogs/${props.id}`}
        >
            <span
                className={classes.dialogPanel__logo}
                style={{backgroundImage: `url('${props.url}')`}}
            />

            <p className={classes.dialogPanel__name}>
                <span>{props.name}</span>
                <span className={classes.dialogPanel__count}>{props.numberNewPosts}</span>
            </p>
        </NavLink>
    );
};

export default DialogItem;