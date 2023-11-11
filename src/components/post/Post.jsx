
import "./post.css"
import { FiMoreVertical } from "react-icons/fi";
import React from 'react'

export default function Post({post}) {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img src={post.profilePicture} alt='img1' className='postProfileImg' />
            <span className='postUserName'> {post.username}</span>
            <span className='postDate'>{post.data}</span>
          </div>
          <div className='postTopRight'>
            <FiMoreVertical />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img src={post.photo} alt='img2' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postButtonLeft'>
            <img src='hearts.jpeg' alt='heart' className='LikeIcon' />
            <img src='like.jpeg' alt='like' className='LikeIcon' />
            <span className='postLikeCounter'>{post.like} people liked it</span>
          </div>
          <div className='postButtonCounter'>
          <span className='postCommentText'> {post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
