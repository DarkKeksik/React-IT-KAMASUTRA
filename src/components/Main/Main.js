import React from "react";
import classes from "./Main.module.css";

import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import MyMusic from "./MyMusic/MyMusic";
import Feed from "./Feed/Feed";
import Settings from "./Settings/Settings";

import {Route} from "react-router-dom";

function Main() {
    return (
        <main className={classes.main}>
            <Route path="/profile" component={Profile}/>
            <Route path="/dialogs" component={Dialogs}/>
            <Route path="/myMusic" component={MyMusic}/>
            <Route path="/feed" component={Feed}/>
            <Route path="/settings" component={Settings} exact />
        </main>
    );
};

export default Main;