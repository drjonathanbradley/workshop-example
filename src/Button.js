import React from 'react'
import './App.css'

export default class Button extends React.Component {
  render() {
    return (
      <button
        className='button'
        onClick={() => {
          this.props.change()
        }}
      >
        {this.props.buttonText}
      </button>
    )
  }
}
