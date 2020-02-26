import React from "react";
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={ classes.header }>
            <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-logo-design-template-6140b09bce93da1f0244afc40640839f_screen.jpg?ts=1566982979"
                alt="Logo"
                className={ classes.header__logo }
            />
        </header>
    );
}

export default Header;