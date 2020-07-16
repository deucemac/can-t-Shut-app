import { loginUser, verifyUser, registerUser, removeToken } from './services/auth'
import Login from './components/Login'
import './App.css';
import { Link, Route, withRouter } from 'react-router-dom' 
import Main from './components/Main'


import React, { Component } from 'react'

class App extends Component {
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

  handleLogOut = () => {
    
    this.setState({
     currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  
  render() {
    return (
      <div>
        <h1>Welcome</h1>
      
        <Route path='/login'>
          <Login
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleLogin={this.loginSubmit}
            currentUser={this.state.currentUser}
            handleLogOut={this.handleLogOut}
          // handleRegister={this.handleRegister}
          />
          </Route>
       
        <Route path='/'>
          <Main
          currentUser={this.state.currentUser}
          // handleLogin={this.handleLogin}
          // handleLogOut={this.handleLogOut}
          />
        </Route> 
      </div>
    )
  }
}

export default withRouter(App)