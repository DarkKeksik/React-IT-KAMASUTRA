import React from "react";
import classes from "./Dialogs.module.css";

import DialogsPanel from "./DialogsPanel/DialogsPanel";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <DialogsPanel />
            <div>
                <p>Здарова</p>
                <p>Привет</p>
                <p>Как твои дела?</p>
                <p>Пойдет, спасибо что спросил)</p>
            </div>
        </div>
    )
}

export default Dialogs;