import React from "react";
import classes from "./DialogsPanel.module.css";

import DialogItem from "./DialogItem/DialogItem";

function DialogsPanel() {
    
    let dialogs = [
        {
            id: "1",
            url: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
            name: "АфродитИТ",
            numberNewPosts: "10"
        },
        {
            id: "2",
            url: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg",
            name: "Андре Нихачук",
            numberNewPosts: "4"
        },
        {
            id: "3",
            url: "https://cs16planet.ru/steam-avatars/images/avatar3177.jpg",
            name: "Beta tester",
            numberNewPosts: "3"
        }
    ]
    
    let dialogsJSX = dialogs.map(dialog  => {
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
};

export default DialogsPanel;