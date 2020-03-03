import React from "react";
import classes from "./Chat.module.css";

import SomeoneMessage from "./SomeoneMessage/SomeoneMessage";
import MyMessage from "./MyMessage/MyMessage";

function Chat (props) {

    let selectorLink = React.createRef();
    let addMsg = () => {
        let text = selectorLink.current.value;
        alert(`Пока сообщения не отправляются, но значение ${text}`);
    };

    let messagesJSX = props.messages.map((i) => {
        if (i.owner) { return <MyMessage avatar={i.avatar} name={i.name} msg={i.msg} date={i.date}/> }
        else { return <SomeoneMessage avatar={i.avatar} name={i.name} msg={i.msg} date={i.date}/> }
    });

    return (
        <div className={classes.wrap}>
            <div className={classes.messages}>
                {messagesJSX}
            </div>
            <textarea ref={selectorLink} placeholder={"Ваше сообщение..."} className={classes.textarea}></textarea>
        </div>
    )
}

export default Chat;