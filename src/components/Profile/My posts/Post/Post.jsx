import React from "react";
import s from './Post.module.css'

const Post = (props) => {

    return <div className={s.item}>
        <img src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'/>
        {props.message}
        <div>
            <span>like</span>
        </div>

    </div>
}

export default Post