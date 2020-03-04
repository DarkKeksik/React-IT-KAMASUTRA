import React from "react";
import classes from "./Dialogs.module.css";

import Chat from "./Chat/Chat";

import DialogsPanel from "./DialogsPanel/DialogsPanel";

function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <DialogsPanel dialogs={props.dialogs} />
            <Chat addMsgForDialog={props.addMsgForDialog} messages={props.messages} />
        </div>
    )
}

export default Dialogs;