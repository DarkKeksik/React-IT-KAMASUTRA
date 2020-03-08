import React from "react";
import classes from "./Dialogs.module.css";

import Chat from "./Chat/Chat";

import DialogsPanel from "./DialogsPanel/DialogsPanel";

function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <DialogsPanel dialogs={props.dialogs} />
            <Chat
                newMsgTextChange={props.newMsgTextChange}
                addMsgForDialog={props.addMsgForDialog}
                messages={props.messages}
                newMsgText={props.newMsgText}
            />
        </div>
    )
}

export default Dialogs;