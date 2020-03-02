import React from "react";
import classes from "../Chat.module.css";

function SomeoneMessage (props) {
    return (
        <div className={classes.message}>
            <div className={classes.message__panel}>
                <p className={classes.logoName}>
                    <span
                        className={classes.message__avatar}
                        style={{backgroundImage: `url('${props.avatar}')`}}
                    ></span>
                    <span>{props.name}</span>
                </p>
                <p>{props.date}</p>
            </div>
            <div>
                {props.msg}
            </div>
        </div>
    )
}

export default SomeoneMessage;