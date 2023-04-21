import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class About extends Component {
  light = () => {
    console.log('About light')
    return (
      <div className="about">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
          alt="About"
        />
        <h1>About</h1>
      </div>
    )
  }

  Dark = () => {
    console.log('About Dark')
    return (
      <div className="about-dark">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
          alt=""
        />
        <h1 className="h1-dark">About</h1>
      </div>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return isDarkTheme ? this.Dark() : this.light()
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
