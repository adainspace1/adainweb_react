import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Academy</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/team'>Our Team</Link>
            </li>
            {/* <li>
              <Link to='/pricing'>Price</Link>
            </li> */}
            <li>
              <Link to='/journal'>Our Product</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            {/* li><li>
              <Link to='/Map'>Map</Link>
            </ */}
          </ul>
          <div className='start'>
            <div className='button'>EXPLORE NOW</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
