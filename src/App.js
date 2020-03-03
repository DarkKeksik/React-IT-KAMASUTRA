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
            <Nav sidebar={props.sidebar} />
            <Main
                posts={props.posts}
                profile={props.profile}
            />
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;