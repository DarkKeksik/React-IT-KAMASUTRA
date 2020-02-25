import React from "react";
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={ classes.header }>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJTfa8woRZ6dR1jeYlKtxXxX7NdN69s6xmaDCTssIm4ZPbhcOL"
                alt="Logo"
                className={ classes.header__logo }
            />
        </header>
    );
}

export default Header;