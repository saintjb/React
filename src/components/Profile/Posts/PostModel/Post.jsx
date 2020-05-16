import React from 'react'
import s from'./Post.module.css';

const Post = (props) => {
    return (

          <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfJyeFmyP4rwCTOjUTc512y4UIOIcSiDRPhCeW00G09bBT0y_2&usqp=CAU' alt=''/>
               { props.message }
               <div> 
                 <span>Likes</span>
                 {props.count}
                </div>
               
                <div>
                 <span>Dislike</span>
                </div>
          </div>
          

    );
}

export default Post;