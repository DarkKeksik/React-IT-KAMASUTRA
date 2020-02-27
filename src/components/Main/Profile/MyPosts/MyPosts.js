import React from "react";
import classes from "./MyPosts.module.css";

import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={classes.posts}>
            <h3 className={classes.posts__title}>Мои посты</h3>
            <div className={classes.posts__wrap}>
                <Post like="10" message="Hi, how are you?" />
                <Post like="15" message="My first post?" />
                <Post like="2" message="My first post?" />
            </div>
        </div>
    );
};

export default MyPosts;