import { loginUser, verifyUser, registerUser, removeToken } from './services/auth'
import Login from './components/Login'
import './App.css';
import { Link, Route } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import ShowTopics from './components/ShowTopics'


import React, { Component } from 'react'
import { getAllTopics } from './services/api-helper';

export default class App extends Component {
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
    const topics = await getAllTopics()
    this.setState({
      topics
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
    console.log(this.state.userData)
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

  // handleRegister = async (userData) => {
  //   const currentUser = await registerUser(userData);
  //   this.setState({ currentUser })
  // }

  handleLogOut = () => {
    
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    console.log(localStorage.getItem('authToken'))
    removeToken();
    this.props.history.push('/login')
  }


  render() {
    
    
    return (
      <div>
        <h1>Welcome</h1>

        

        
          <Main
            currentUser={this.state.currentUser}
            handleLogin={this.loginSubmit}
            handleLogOut={this.handleLogOut}
          handleRegister={this.handleRegister}
          userData={this.state.userData}
          handleChange={this.handleChange}
        />
        
        
        {this.state.currentUser ? <ShowTopics topics={this.state.topics}/> : null }
        
        
        

        
         


        <Link to='/register'><p>Sign Up</p></Link>
      </div>
    )
  }
}

