import React from "react";
import classes from "./Nav.module.css";

function Nav() {
    return (
        <nav className={`${classes.nav}`}>
            <a href="test" className={`${classes.nav__item}`}>Профиль</a>
            <a href="test" className={`${classes.nav__item} ${classes.nav__item_active}`}>Сообщения</a>
            <a href="test" className={`${classes.nav__item}`}>Моя музыка</a>
            <a href="test" className={`${classes.nav__item}`}>Стенограма</a>
            <a href="test" className={`${classes.nav__item}`}>Настройка</a>
        </nav>
    )
}

export default Nav;