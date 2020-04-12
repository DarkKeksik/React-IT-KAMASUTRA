import React from "react";
import classes from "./AllMusic.module.css";

function AllMusic() {
    return (
        <section className = { classes.mymusic__all }>
            <div className = { classes.mymusic__item }>
                Тут будет список всей музыки
            </div>
        </section>
    )
}

export default AllMusic;