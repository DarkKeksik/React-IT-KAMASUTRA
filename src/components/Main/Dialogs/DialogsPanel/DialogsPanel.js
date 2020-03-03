import React from "react";
import classes from "./DialogsPanel.module.css";

import DialogItem from "./DialogItem/DialogItem";

function DialogsPanel(props) {

    let dialogsJSX = props.dialogs.map(dialog  => {
        return <DialogItem
            id = {dialog.id}
            url= {dialog.url}
            name= {dialog.name}
            numberNewPosts={dialog.numberNewPosts}
        />
    });
    
    return (
        <div className={classes.dialogPanel}>        
            { dialogsJSX }
        </div>
    );
}

export default DialogsPanel;