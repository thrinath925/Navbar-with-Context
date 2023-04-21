import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Home extends Component {
  light = () => {
    console.log('Home light')
    return (
      <div className="home-light">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
          alt=""
        />
        <h1>Home</h1>
      </div>
    )
  }

  Dark = () => {
    console.log('Home Dark')
    return (
      <div className="home-dark">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
          alt=""
        />
        <h1 className="h1-dark">Home</h1>
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

export default Home
