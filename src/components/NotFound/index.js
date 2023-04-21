import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Notfound extends Component {
  light = () => {
    console.log('Notfound-light')
    return (
      <div className="Notfound-light">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h1>Lost Your Way</h1>
        <p>We cannot seem to find the page</p>
      </div>
    )
  }

  Dark = () => {
    console.log('Notfound-Dark')
    return (
      <div className="Notfound-dark">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h1 className="h1-dark">Lost Your Way</h1>
        <p className="h1-dark">We cannot seem to find the page</p>
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

export default Notfound
