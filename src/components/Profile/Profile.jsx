import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile
