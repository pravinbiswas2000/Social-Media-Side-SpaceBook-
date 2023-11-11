import React from 'react'
import "./leftbar.css"
import { MdRssFeed, MdChat, MdVideoSettings, MdGroups, MdBookmark, MdOutlineQuestionMark, MdWork, MdEventNote } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
export default function Leftbar() {
  return (

    <div className='leftbar'>

      <div className='leftbarWrapper'></div>

      <ul className='leftbarList'>
        <li className='leftbarListitems'>
          <MdRssFeed className='leftbarIcon' />
          <span className='leftbarListitemText'>Feed</span>
        </li>

        <li className='leftbarListitems'>
          <MdChat className='leftbarIcon' />
          <span className='leftbarListitemText'>Chat</span>
        </li>

        <li className='leftbarListitems'>
          <MdVideoSettings className='leftbarIcon' />
          <span className='leftbarListitemText'>Videos</span>
        </li>

        <li className='leftbarListitems'>
          <MdGroups className='leftbarIcon' />
          <span className='leftbarListitemText'>Groups</span>
        </li>

        <li className='leftbarListitems'>
          <MdBookmark className='leftbarIcon' />
          <span className='leftbarListitemText'>BookMarks</span>
        </li>

        <li className='leftbarListitems'>
          <MdOutlineQuestionMark className='leftbarIcon' />
          <span className='leftbarListitemText'>Questions</span>
        </li>

        <li className='leftbarListitems'>
          <MdWork className='leftbarIcon' />
          <span className='leftbarListitemText'>Jobs</span>
        </li>

        <li className='leftbarListitems'>
          <MdEventNote className='leftbarIcon' />
          <span className='leftbarListitemText'>Events</span>
        </li>

        <li className='leftbarListitems'>
          <FaGraduationCap className='leftbarIcon' />
          <span className='leftbarListitemText'>Courses</span>
        </li>

      </ul>

      <button className='leftbarButton'>Show More</button>

      <hr className='leftbarHr' />

      <ul className='leftbarFriendlist'>
        <li className='leftbarFriend'>
          <img className='leftbarFriendimg' src="rohit.jpeg" alt="Rohit" />
          <span className='leftbarFriendname'>Rohit Sharma</span>
        </li>

        <li className='leftbarFriend'>
          <img className='leftbarFriendimg' src="dhoni.jpeg" alt="Rohit" />
          <span className='leftbarFriendname'>Ms Dhoni</span>
        </li>

        <li className='leftbarFriend'>
          <img className='leftbarFriendimg' src="shreyas.jpeg" alt="Rohit" />
          <span className='leftbarFriendname'>Shreyas Iyer</span>
        </li>

        <li className='leftbarFriend'>
          <img className='leftbarFriendimg' src="surya.jpeg" alt="surya" />
          <span className='leftbarFriendname'>Suryakumar Yadav</span>
        </li>

        <li className='leftbarFriend'>
          <img className='leftbarFriendimg' src="sachin.jpeg" alt="sachin" />
          <span className='leftbarFriendname'>Sachin Tendulkar</span>
        </li>

        <li className='leftbarFriend'>
          <img className='leftbarFriendimg' src="hardik.jpeg" alt="hardik" />
          <span className='leftbarFriendname'>Hardik Pandaya </span>
        </li>

        <li className='leftbarFriend'>
          <img className='leftbarFriendimg' src="kl.jpg" alt="kl" />
          <span className='leftbarFriendname'>Kl Rahul</span>
        </li>

        <li className='leftbarFriend'>
          <img className='leftbarFriendimg' src="dhawan.jpg" alt="dhawan" />
          <span className='leftbarFriendname'>Shikhar Dhawan</span>
        </li>

      </ul>

    </div>

  )
}
