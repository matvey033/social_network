import React from 'react';
import s from './styles/Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src='https://s1.1zoom.me/big3/446/375561-svetik.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            posts
          </div>
        </div>
      </div>
    )
}

export default Profile;