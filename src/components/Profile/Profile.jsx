import React from 'react'
import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts'

const Profile = () => {
    return (
        <div>
          <div>
            <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt=''/>
          </div>
          <div> 
            ava + desc
          </div>
          < MyPosts />
      </div>

    );
}

export default Profile;