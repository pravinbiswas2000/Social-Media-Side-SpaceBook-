import React from 'react'
import "./centerbar.css"
import { posts } from '../../data';
import Share from '../share/Share'
import Post from '../post/Post'
export default function Centerbar() {
  return (
    <div className='centerbar'>
      <div className='centerbarWrapper'>
        <Share />
        {posts.map((p) => (<Post key={p.id} post={p} />)
        )}


      </div>
    </div>
  )
}
