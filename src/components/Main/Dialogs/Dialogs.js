import React from "react";
import classes from "./Dialogs.module.css";

import Chat from "./Chat/Chat";

import DialogsPanel from "./DialogsPanel/DialogsPanel";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <DialogsPanel />
            <Chat />
        </div>
    )
}

export default Dialogs;