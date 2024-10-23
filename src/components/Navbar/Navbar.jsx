import React from 'react'
import '.Navbar.css'
import ttlogo from '../../assets/ttlogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={ttlogo} alt="" />
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
            <button>Sign Up <img src="" alt="" /></button>
        </div>
      
    </div>
  )
}

export default Navbar
