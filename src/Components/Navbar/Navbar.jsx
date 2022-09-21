import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './Navbar.css'

export const Navbar = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <nav className='nav'>
            <span className='toggle' onClick={() =>setToggle(!toggle)}>{ toggle ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} /> }  </span>
            <ul className={toggle ? "" : "menu_toggle"}>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/work"> Works </Link></li>
                <li><Link to="/"> Blog </Link></li> 
                <li><Link to="/"> Contact  </Link></li>
            </ul>
        </nav>
    )
}

