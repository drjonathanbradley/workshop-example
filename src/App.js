import React from 'react'
import './App.css'
import Button from './Button'
import Axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Jonathan',
      data: [],
    }

    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          data: response.data,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeName = () => {
    this.setState({
      name: 'Bradley',
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className='App'>
        <h1>Hello {this.state.name}</h1>
        <div className='post-container'>
          {this.state.data.map((item, index) => {
            return (
              <div className='box'>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            )
          })}
        </div>
        <div className='button-container'>
          <Button change={this.changeName} buttonText='Change Name' />
          <Button
            change={() => console.log('Second Button')}
            buttonText='Console Log'
          />
        </div>
      </div>
    )
  }
}

export default App
