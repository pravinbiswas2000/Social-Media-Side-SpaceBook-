import React from 'react'
import "./toopbar.css"
import { CiSearch } from "react-icons/ci";
import { BsFillPersonFill, BsFillChatSquareTextFill, BsFillBellFill } from "react-icons/bs";
export default function Toopbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>SpaceBook</span>
            </div>

            <div className='topbarCenter'>
                <div className='searchbar'>
                    <CiSearch className='searchIcon' />
                    <input className='searchInput' placeholder='search for friends, posts or videos' ></input>
                </div>
            </div>

            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarlink'>Homepage</span>
                    <span className='topbarlink'>Timeline</span>
                </div>

                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <BsFillPersonFill />
                        <span className='topbarIconBadge'>4</span>
                    </div>
                </div>

                <div className='topbarIconItem'>
                    <BsFillChatSquareTextFill />
                    <span className='topbarIconBadge'>26</span>
                </div>

                <div className='topbarIconItem'>
                    <BsFillBellFill />
                    <span className='topbarIconBadge'>58</span>
                </div>

                <img src="virat.jpeg" alt="kohli" className='topbarImg' />
            </div>
        </div >

    )
}
