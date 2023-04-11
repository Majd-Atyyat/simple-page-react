import { useState } from 'react'
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom'
import { ReactComponent as listIcon } from '../assets/listIcon.svg'
import { ReactComponent as Logo } from '../assets/logo.svg'
import './header.css'

const Home = () => <h1>Home</h1>
const Blog = () => <h1>Blog</h1>
const Projects = () => <h1>Projects</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <BrowserRouter>
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
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navbar
