import { loginUser, verifyUser, registerUser, removeToken } from './services/auth'

import './App.css';
import { withRouter } from 'react-router-dom'
import Main from './components/Main'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      userData: {
        username: '',
        password: ''
      },
      currentUser: null
    }
    // this.handleLogOut=this.handleLogOut.bind(this)
  }

  componentDidMount = async () => {
  
    const currentUser = await verifyUser()
    this.setState({
      currentUser
    })
    if (!currentUser) this.props.history.push('/login')
   
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
    this.props.history.push('/')
  }

  handleRegister = async (userData) => {
    
    const currentUser = await registerUser(userData)
    this.setState({
      currentUser
    })
    this.props.history.push('/')
  }

  handleLogOut = () => {
    
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    
    removeToken();
    this.props.history.push('/login')
  }

  render() {
    
    return (
      <div>
        
        
          <Main
            currentUser={this.state.currentUser}
            handleLogin={this.loginSubmit}
            handleLogOut={this.handleLogOut}
            handleRegister={this.handleRegister}
            userData={this.state.userData}
            handleChange={this.handleChange}
        />
        
      </div>
    )
  }
}

export default withRouter(App)
        
        
      