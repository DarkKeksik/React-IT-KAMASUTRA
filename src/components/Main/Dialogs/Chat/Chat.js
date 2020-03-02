import React from "react";
import classes from "./Chat.module.css";

import SomeoneMessage from "./SomeoneMessage/SomeoneMessage";
import MyMessage from "./MyMessage/MyMessage";

function Chat (props) {

    let messagesJSX = props.messages.map((i) => {
        if (i.owner) { return <MyMessage avatar={i.avatar} name={i.name} msg={i.msg} date={i.date}/> }
        else { return <SomeoneMessage avatar={i.avatar} name={i.name} msg={i.msg} date={i.date}/> }
    });

    return (
        <div className={classes.messageWrap}>
            {messagesJSX}
        </div>
    )
}

export default Chat;