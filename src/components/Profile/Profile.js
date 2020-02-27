import React from "react";
import classes from "./Profile.module.css";

import ProfileBg from "./ProfileBg/ProfileBg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={`${classes.profile}`}>
            <ProfileBg
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d971472733091.5bf1c9e776516.jpg"
            />
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;