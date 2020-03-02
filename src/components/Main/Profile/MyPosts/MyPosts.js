import React from "react";
import classes from "./MyPosts.module.css";

import Post from "./Post/Post";

function MyPosts() {
    let posts = [
        {
            like: "10",
            message: "Hi, how are you?"
        },
        {
            like: "15",
            message: "My first post?"
        },
        {
            like: "2",
            message: "My first post?"
        }
    ];

    let PostsJSX = posts
        .map((post) => <Post like={post.like} message={post.message} /> );

    return (
        <div className={classes.posts}>
            <h3 className={classes.posts__title}>Мои посты</h3>
            <div className={classes.posts__wrap}>
                {PostsJSX}
            </div>
        </div>
    );
};

export default MyPosts;