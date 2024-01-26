import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbtn" style={{"border":"2px solid green"}}>
        <p>XXX</p>
        <div>48</div>
      </div>
      <div className="navbtn" style={{"border":"2px solid red"}}>
        <p>XXX</p>
        <div style={{"background-color":"red"}}>24</div>
      </div><div className="navbtn" style={{"border":"2px solid green"}}>
        <p>XXX</p>
        <div>43</div>
      </div><div className="navbtn" style={{"border":"2px solid orange"}}>
        <p>XXX</p>
        <div style={{"background-color":"orange"}}>35</div>
      </div><div className="navbtn pipe" style={{"background-color":"green","text-align":"center"}}>
        <p >Pipeline is Safe</p>
      </div>
    </div>
  )
}

export default Navbar
