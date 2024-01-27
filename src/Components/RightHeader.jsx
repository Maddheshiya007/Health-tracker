import React from 'react'
import './RighHeader.css'
const RightHeader = () => {
  return (
    <div className='right-header'>
      <div><select className='location-select' name="location" id="location">
        <option value="Kanpur">Select Location</option>
        <option value="Kanpur">Kanpur</option>
        <option value="Gorakhpur">Gorakhpur</option>
        <option value="New Delhi">New Delhi</option>
        <option value="Noida">Noida</option>
        <option value="Mumbai">Mumbai</option>
      </select></div>
      <div className='filter'>
        <i class="fa-solid fa-plus"></i>
        <i class="fa-solid fa-upload"></i>
        <i class="fa-solid fa-bars-progress"></i>
        <i class="fa-solid fa-download"></i>
      </div>
    </div>
  )
}

export default RightHeader
