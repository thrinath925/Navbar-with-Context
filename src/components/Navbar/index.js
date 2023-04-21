import {Component} from 'react'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Navbar extends Component {
  light = t => (
    <div className="Navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
        alt="website logo"
        className="website logo"
      />
      <div className="links">
        <Link className="home-link" to="/">
          Home
        </Link>
        <Link className="about-link" to="/about">
          About
        </Link>
      </div>

      <img
        onClick={t}
        src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
        alt="theme"
        className="website logo"
      />
    </div>
  )

  Dark = t => (
    <div className="Navbar-dark">
      <img
        src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
        alt="website logo"
        className="logo"
      />
      <div className="dark-links">
        <Link className="dark-home-link" to="/">
          Home
        </Link>
        <Link className="dark-about-link" to="/about">
          About
        </Link>
      </div>

      <img
        onClick={t}
        src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
        alt="theme"
        className="website logo"
      />
    </div>
  )

  lightDark = (light, Dark) => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const toggle = () => {
          console.log(isDarkTheme)
          toggleTheme()
        }

        return isDarkTheme ? this.Dark(toggle) : this.light(toggle)
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return this.lightDark()
  }
}

export default Navbar
