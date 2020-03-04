import React from "react";
import classes from "./Post.module.css";

function Post(props) {

    return (
        <div className={classes.posts__item}>
            <span>{ props.message }</span>
            <span className={classes.posts__likes}>
                {`${props.likes} лайков`}
            </span>
        </div>
    )
}

export default Post;