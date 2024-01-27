import React from 'react'
import './Main.css'
import Navbar from './Navbar'
import RightHeader from './RightHeader'
import Psichart from './Psichart'
import Events from './Events'
import Health from './Health'
import PacketHour from './PacketHour'
import Algorith from './Algorith'
import Pressure from './Pressure'

const Main = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='main-div'>
        <div className='left-div'>
          <RightHeader />
          <Psichart />
          <div className='event-health'>
            <Events />
            <Health />
          </div>
        </div>
        <div className="right-div">
          <PacketHour />
          <Algorith />
          <Pressure />
        </div>
      </div>
    </div>
  )
}

export default Main
