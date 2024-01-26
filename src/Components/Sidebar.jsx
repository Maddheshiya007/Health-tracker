// import React, { useEffect, useState } from 'react'
import './Sidebar.css'


const Sidebar = () => {
    
    return (
        <div className='sidebar'>
            <div className='sidebox'>
                <div className='sidebtn active' id='overview'>
                    <i class="fa-solid fa-table"></i>
                    <p>Overview</p>
                </div>
                <div className='sidebtn' id='algorithm'>
                    <i class="fa-solid fa-face-smile-beam"></i>
                    <p>Alogrithm</p>
                </div>
                <div className='sidebtn' category="sensorhealth">
                    <i class="fa-solid fa-chart-line"></i>
                    <p>Sensor Health</p>
                </div>
                <div className='sidebtn' category="settings">
                    <i class="fa-solid fa-gear"></i>
                    <p>Settings</p>
                </div>
                <div className='sidebtn' category="contact">
                    <i class="fa-solid fa-phone"></i>
                    <p>Contact Clients</p>
                </div>
            </div>
            <div>
                <div className='sidebtn downloadbtn'>
                    <i class="fa-solid fa-download"></i>
                    <p>Download Report</p>
                </div>
                <div className='sidebtn '>
                    <i class="fa-solid fa-circle-xmark"></i>
                    <p> XXXXXX</p> <i class="fa-solid fa-user-plus"></i>
                </div>
            </div>

        </div>

    )
}
export default Sidebar
