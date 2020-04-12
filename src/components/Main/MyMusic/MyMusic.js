import React from "react";
import classes from "./MyMusic.module.css";
import AllMusic from "./AllMusic/AllMusic";
import MusicRecomend from "./MusicRecomend/MusicRecomend";

function MyMusic () {
    return (
        <article className = { classes.mymusic }>
            <AllMusic />
            <MusicRecomend />
        </article>
    )
}

export default MyMusic;