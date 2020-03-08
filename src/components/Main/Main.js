import React from "react";
import classes from "./Main.module.css";

import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import MyMusic from "./MyMusic/MyMusic";
import Feed from "./Feed/Feed";
import Settings from "./Settings/Settings";

import {Route} from "react-router-dom";

function Main(props) {
    return (
        <main className={classes.main}>
            <Route path="/profile" render={() =>
                    <Profile
                        posts={props.posts}
                        profile={props.profile}
                        addPost={props.addPost}
                        newPostText={props.newPostText}
                        newPostTextChange={props.newPostTextChange}
                    />
                }
            />
            <Route path="/dialogs" render={ () =>
                <Dialogs
                    messages={props.messages}
                    dialogs={props.dialogs}
                    newMsgText={props.newMsgText}
                    newMsgTextChange={props.newMsgTextChange}
                    addMsgForDialog={props.addMsgForDialog}
                />
            }/>
            <Route path="/myMusic" component={MyMusic}/>
            <Route path="/feed" component={Feed}/>
            <Route path="/settings" component={Settings} exact />
        </main>
    );
};

export default Main;