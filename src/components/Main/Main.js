import React from "react";
import classes from "./Main.module.css";

import Profile from "../Profile/Profile";

function Main() {
    return (
        <main className={ classes.main }>
            <Profile />
        </main>
    );
};

export default Main;