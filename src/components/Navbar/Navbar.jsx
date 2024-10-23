import React from 'react'
import './Navbar.css'
import tlogo from '../../assets/tlogo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={tlogo} alt="" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="usd">EUR</option>
                <option value="usd">KES</option>
            </select>
            <button>Sign Up <img src={arrow_icon} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Navbar
