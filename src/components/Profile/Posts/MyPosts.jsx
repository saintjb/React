import React from 'react'
import s from './MyPosts.module.css';
import Post from './PostModel/Post';

const MyPosts = (props) => {
    return (

          <div className={s.posts}>
            my posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          < Post message='Hi, people' count=' 15' />
          < Post message='First post' count=' 10'/>
          </div>

    );
}

export default MyPosts;