import React from 'react';
import './General.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
        <div className={"appWrapper"}>
            <Header />
            <Nav sidebar={props.state.sidebar} />
            <Main
                posts={props.state.profilePage.posts}
                profile={props.state.profilePage.profile}
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
                addPost={props.addPost}
                addMsgForDialog={props.addMsgForDialog}
            />
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;