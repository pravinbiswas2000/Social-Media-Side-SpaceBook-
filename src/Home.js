import React from 'react'
import "./home.css"
import Toopbar from './components/toopbar/Toopbar'
import Leftbar from './components/leftbar/Leftbar'
import Centerbar from './components/centerbar/Centerbar'
import Rightbar from './components/rightbar/Rightbar'


export default function Home() {
  return (
    <div><Toopbar />
      <div className='homeContainer'>
        <Leftbar />
        <Centerbar />
        <Rightbar />
      </div>
    </div>

  )
}
