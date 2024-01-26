import React from 'react'
import './PacketHour.css'
const PacketHour = () => {
    return (
        <div className='health packet'>
            <div className="psi-header ">
                <p>Missed Packets/Hour</p>

                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <br />
            <hr />
            <div className='health-chart '>
                <div className='bar'>
                    <div className='red'>
                        <div className="yellow">
                            <div className="blue"></div>
                        </div>
                    </div>
                </div>
                <div className='bar-data'>
                    <div className='box-bar-data'>
                        <h2>2</h2>
                        <div className='cx'>
                            <div className='circle bc'></div>
                            xxx
                        </div>

                        </div>
                        <div className='box-bar-data'>
                        <h2>26</h2>
                        <div className='cx'>
                            <div className='circle yc'></div>
                            xxx
                        </div>
                        </div>
                        <div className='box-bar-data'>
                        <h2>7</h2>
                        <div className='cx'>
                            <div className='circle rc'></div>
                            xxx
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PacketHour
