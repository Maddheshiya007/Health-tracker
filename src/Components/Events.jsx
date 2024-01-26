import React from 'react'
import './Events.css'

const Events = () => {
  return (
    <div className='events'> 
      <div className="events-header">
        <p>Events</p>
        
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <br />
      <hr />
      <div className='psi-chart-img'>
        <table cellSpacing={20} cellPadding={10} >
        <thead>
                <td>Time</td>
                <td>Location</td>
                <td>Sensor ID</td>
                <td>Event Type</td>
            </thead>
            <tbody>
            <tr>
                <td>07:34:54</td>
                <td>XX</td>
                <td>P-002</td>
                <td>YY</td>
            </tr>
            <tr>
                <td>08:04:39</td>
                <td>XX</td>
                <td>P-003</td>
                <td>YY</td>
            </tr><tr>
                <td>11:37:38</td>
                <td>XX</td>
                <td>P-002</td>
                <td>YY</td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Events
