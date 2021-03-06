import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

import Friends from "./Friends/Friends";

function Nav(props) {

    return (
        <nav className={`${classes.nav}`}>
            <NavLink
                activeClassName={classes.nav__item_active}
                to="/profile"
                className={`${classes.nav__item}`}
            >Профиль</NavLink>

            <NavLink
                activeClassName={classes.nav__item_active}
                to="/dialogs"
                className={`${classes.nav__item}`}
            >Сообщения</NavLink>

            <NavLink
                activeClassName={classes.nav__item_active}
                to="/myMusic"
                className={`${classes.nav__item}`}
            >Моя музыка</NavLink>

            <NavLink
                activeClassName={classes.nav__item_active}
                to="/feed"
                className={`${classes.nav__item}`}
            >Стенограма</NavLink>

            <NavLink
                exact
                activeClassName={classes.nav__item_active}
                to="/settings"
                className={`${classes.nav__item}`}
            >Настройки</NavLink>

            <Friends friends={props.sidebar.friends} />
        </nav>
    )
}

export default Nav;