import React from "react";
import classes from "./MusicRecomend.module.css";

function MusicRecomend() {
    return (
        <section className = { classes.mymusic__recomend }>
            <div className = { classes.mymusic__recomendItem }>
                Тут будут рекомендации груп
            </div>
        </section>
    )
}

export default MusicRecomend;