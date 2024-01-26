import React from 'react'
import './Psichart.css'
import psi_chart from '../Assests/Screenshot 2024-01-26 184851.png'
const Psichart = () => {
  return (
    <div className='psi-chart'>
      <div className="psi-header">
        <p>XXX</p>
        <p>31.56 PSI</p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <br />
      <hr />
      <div className='psi-chart-img'>
        <img src={psi_chart} alt="" />
      </div>
    </div>
  )
}

export default Psichart
