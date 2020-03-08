import React from "react";
import classes from "./Chat.module.css";

import SomeoneMessage from "./SomeoneMessage/SomeoneMessage";
import MyMessage from "./MyMessage/MyMessage";

function Chat (props) {    
    let linkOnElm = React.createRef();

    let addMsg = () => {
        let text = linkOnElm.current.value;
        props.addMsgForDialog(text);
        props.newMsgTextChange("");
    }

    let messagesJSX = props.messages.map((i) => {
        if (i.owner) { return <MyMessage avatar={i.avatar} name={i.name} msg={i.msg} date={i.date}/> }
        else { return <SomeoneMessage avatar={i.avatar} name={i.name} msg={i.msg} date={i.date}/> }
    });

    let newMessagesTextChange = ()=> {
        let text = linkOnElm.current.value;
        props.newMsgTextChange(text);
    }
                      
    return (
        <div className={classes.wrap}>
            <div className={classes.messages}>
                {messagesJSX}
            </div>
            <div className={classes.textareaWrap}>
                <textarea
                    ref={linkOnElm}
                    onChange={newMessagesTextChange}
                    placeholder={"Ваше сообщение..."}
                    value={props.newMsgText}
                    className={classes.textarea}
                />
                <span onClick={addMsg} className={`button ${classes.sendMsg}`}>Отправить</span>
            </div>
        </div>
    )
}

export default Chat;