import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMsgForDialog, newPostTextChange, newMsgTextChange } from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        addMsgForDialog={addMsgForDialog}
        newPostTextChange={newPostTextChange}
        newMsgTextChange={newMsgTextChange}
    />, document.getElementById('root'));
};