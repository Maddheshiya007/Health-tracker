import React from 'react'
import './Pressure.css'


const Pressure = () => {
  return (
    <div className='health packet'>
            <div className="psi-header ">
                <p>Pressure values (psi)</p>

                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <br />
            <hr />
            <div className='health-chart '>
            <div className='pressure-data'>
                <h1>31.56</h1>
                <i class="fa-solid fa-arrow-trend-up arrow"></i>
            </div>
            <div className='back-forward-btn'>
        <i class="fa-solid fa-circle-chevron-left"></i>
        <p className='pre'>Chudiyala</p>
        <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
            </div>
        </div>
  )
}

export default Pressure
