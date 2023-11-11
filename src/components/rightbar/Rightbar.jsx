import React from 'react'
import "./rightbar.css"
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdateContainer">
          <img src='gift.jpeg' alt='gift' className='birthdayImg' />
          <span className='birthdayText'> <b>Ms dhoni </b>and <b>2 other friends</b> have birthday today</span>
        </div>
        <img className='rightbarAd' src='burger.jpg' alt='burger' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='FriendsList'>
          <li className='rightbarFriend'>

            <div className='rightbarProfileImgContainer'>
              <img src='sachin.jpeg' alt='sachin' className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>Sachin Tendulkar</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='shreyas.jpeg' alt='shreyas' className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>Shreyas Iyer</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='rohit.jpeg' alt='sachin' className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>Rohit Sharma</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='virat.jpeg' alt='sachin' className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>Virat Kohli</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='surya.jpeg' alt='surya' className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>SuryaKumar Yadav</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='kl.jpg' alt='kl' className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>Kl Rahul</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
