import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={`${classes.nav}`}>
            <NavLink to="/profile" className={`${classes.nav__item} ${classes.nav__item_active}`}>Профиль</NavLink>
            <NavLink to="/dialogs" className={`${classes.nav__item}`}>Сообщения</NavLink>
            <NavLink to="/myMusic" className={`${classes.nav__item}`}>Моя музыка</NavLink>
            <NavLink to="/feed" className={`${classes.nav__item}`}>Стенограма</NavLink>
            <NavLink to="/settings" className={`${classes.nav__item}`}>Настройка</NavLink>
        </nav>
    )
}

export default Nav;