import React from "react";
import classes from "./Chat.module.css";

import SomeoneMessage from "./SomeoneMessage/SomeoneMessage";
import MyMessage from "./MyMessage/MyMessage";

function Chat () {

    let messages = [
        {
            name: "АфродитИТ",
            avatar: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
            msg: "Привет, знаю что давно не писал, но ты должен мне сотку",
            date: "2020-03-02T09:51:00",
            owner: true
        },
        {
            name: "Андре Нихачук",
            avatar: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg",
            msg: "Это ту, которую я вернул тебе 3 месяца назад?",
            date: "2020-03-02T09:51:00",
            owner: false
        },
        {
            name: "АфродитИТ",
            avatar: "https://avatars3.githubusercontent.com/u/22128117?s=400&u=f4d686ff3d5743c85456b335d81f9064028fe888&v=4",
            msg: "Понял)",
            date: "2020-03-02T09:51:00",
            owner: true
        },
    ];

    let messagesJSX = messages.map((i) => {
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