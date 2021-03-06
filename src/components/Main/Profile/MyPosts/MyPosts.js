import React from "react";
import classes from "./MyPosts.module.css";

import Post from "./Post/Post";

function MyPosts(props) {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text, 0);
        props.newPostTextChange("");
    };
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.newPostTextChange(text);
    };

    let PostsJSX = props.posts
        .map((post) => <Post likes={post.likes} message={post.message} /> );
             
    return (
        <div className={classes.posts}>
            <div className={classes.posts__panel}>
                <h3 className={classes.posts__title}>Мои посты</h3>
                <span onClick={ addPost } className={"button"}>Новый пост</span>
            </div>
            <textarea
                value={props.newPostText}
                onChange={onPostChange}
                className={classes.posts__textarea}
                placeholder={"Введи сообщение поста"}
                ref={newPostElement}
            />
            <div className={classes.posts__wrap}>
                {PostsJSX}
            </div>
        </div>
    );
};

export default MyPosts;