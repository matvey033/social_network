import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src='https://s1.1zoom.me/big3/446/375561-svetik.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <MyPost />
      </div>
    )
}

export default Profile;