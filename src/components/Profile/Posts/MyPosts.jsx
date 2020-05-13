import React from 'react'
import s from'./MyPosts.module.css';

const MyPosts = () => {
    return (

          <div className={s.posts}>
            my posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={s.item}>
            New post
          
           <div className={s.item}>
            post 1
          </div>
            <div className={s.item}>post2</div>
            </div>
          </div>

    );
}

export default MyPosts;