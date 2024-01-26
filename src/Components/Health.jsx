import React from 'react'
import './Health.css'
import healthchart from '../Assests/health.png'
const Health = () => {
  return (
    <div className='health'>
      <div className="psi-header">
        <p>Health</p>
        
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <br />
      <hr />
      <div className='health-chart'>
        <div>
            <img src={healthchart} alt="" />
        </div>
        <div className='back-forward-btn'>
        <i class="fa-solid fa-circle-chevron-left"></i>
        <p>Chudiyala</p>
        <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </div>
  )
}

export default Health
