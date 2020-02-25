import React from "react";
import classes from "./Nav.module.css";

function Nav() {
    return (
        <nav className={ classes.nav }>
            <div className={ classes.nav__item }>Profile</div>
            <div className={ classes.nav__item }>Messages</div>
        </nav>
    )
}

export default Nav;