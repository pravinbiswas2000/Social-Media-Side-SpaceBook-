import React from 'react'
import "./share.css"
import { MdPermMedia, MdLocationOn } from "react-icons/md";
import { BsEmojiSunglassesFill, BsFillTagsFill } from "react-icons/bs";

export default function Share() {
  var Style1 = { color: "blue" };
  var Style2 = { color: "Yellow" };
  var Style3 = { color: "pink" };
  var Style4 = { color: "green" };
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img src='virat.jpeg' alt='virat' className='shareProfileimg' />
          <input placeholder="What's in your mind Virat?" className='shareInput' />
        </div>
        <hr className='shareHr' />
        <div className='shareButton'>
          <div className='shareOptions'>
            <div className='shareOption'>
              <MdPermMedia style={Style1} className='shareIcon' />
              <span className='shareOptiontext'>Photo/Videos</span>
            </div>

            <div className='shareOption'>
              <BsEmojiSunglassesFill style={Style2} className='shareIcon' />
              <span className='shareOptiontext'>Emoji</span>
            </div>

            <div className='shareOption'>
              <BsFillTagsFill style={Style3} className='shareIcon' />
              <span className='shareOptiontext'>Tags</span>
            </div>

            <div className='shareOption'>
              <MdLocationOn style={Style4} className='shareIcon' />
              <span className='shareOptiontext'>Locations</span>
            </div>
          </div>
          <button className='shareButton1'>Share</button>
        </div>
      </div>
    </div>
  )
}
