import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img className={s.mainImage}
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        </div>
        <div>
            <img className={s.profileImage}
                src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'/>
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile