import { loginUser, verifyUser, registerUser } from './services/auth'
import Login from './components/Login'
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

  signOut = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      currentUser: !prevState.currentUser
    }))
  }
  
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Login
            handleChange={this.handleChange}
            userData={this.state.userData}
            handleLogin={this.loginSubmit}
            currentUser={this.state.currentUser}
            signOut={this.signOut}
          />
      </div>
    )
  }
}

