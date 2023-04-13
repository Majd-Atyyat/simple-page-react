import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as listIcon } from '../assets/listIcon.svg'
import { ReactComponent as Logo } from '../assets/logo.svg'
import './header.css'






const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <listIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>

        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/blog">Blog</a>
            </li>
            <li>
            <a href="/projects">Projects</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar