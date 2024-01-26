import React from 'react'
import './Algorith.css'


const Algorith = () => {
  return (
    <div className='health packet'>
            <div className="psi-header ">
                <p>Algorithm Status</p>

                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <br />
            <hr />
            <div className='health-chart '>
            <i class="fa-regular fa-circle-check circle-check"></i>
            <p className='algo-p'>Runnig in Real Time</p>
            </div>
        </div>
  )
}

export default Algorith
