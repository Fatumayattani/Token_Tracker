import React from 'react'
import './Navbar.css'
import t2logo from '../../assets/t2logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={t2logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">KES</option>
            </select>
            <button>Sign Up <img src={arrow_icon} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Navbar
