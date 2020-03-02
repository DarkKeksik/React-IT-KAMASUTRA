import React from "react";
import classes from "./Profile.module.css";

import ProfileBg from "./ProfileBg/ProfileBg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return (
        <div className={`${classes.profile}`}>
            <ProfileBg
                src={props.profile.bgSrc}
                musicPosts={props.profile.musicPosts}
            />
            <ProfileInfo
                avatar={props.profile.avatar}
                name={props.profile.name}
                status={props.profile.status}
            />
            <MyPosts posts={props.posts} />
        </div>
    );
}

export default Profile;