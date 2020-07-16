import { loginUser, verifyUser, registerUser } from './services/auth'
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    userData: {
      username: '',
      password: ''
    },
    currentUser: null
  }

  componentDidMount = async () => {
    const currentUser = await verifyUser()
    this.setState({
      currentUser
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }))
  }

  loginSubmit = async (e) => {
    e.preventDefault()
    const currentUser = await loginUser(this.state.userData)
    this.setState({
      currentUser
    })
  }

  handleRegister = async (e) => {
    e.preventDefault()
    const currentUser = await registerUser(this.state.userData)
    this.setState({
      currentUser
    })
  }
  
  render() {
    return (
      <div>
        <Register
            handleChange={this.handleChange}
            userData={this.state.userData}
            handleRegister={this.handleRegister}
          />
      </div>
    )
  }
}

