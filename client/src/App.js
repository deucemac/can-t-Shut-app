import { loginUser, verifyUser, registerUser, removeToken } from './services/auth'
import Login from './components/Login'
import './App.css';
import { Link, Route, withRouter } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'


import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    console.log('dfe')
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

        <Route path='/login'>
          <Login
            handleChange={this.handleChange}
            userData={this.state.userData}
            handleLogin={this.loginSubmit}
            currentUser={this.state.currentUser}
          // handleLogOut={this.handleLogOut}
          // handleRegister={this.handleRegister}
          />
        </Route>

        {/* <Route exact path='/'>
          <Main
          currentUser={this.state.currentUser}
          // handleLogin={this.handleLogin}
            handleLogOut={this.handleLogOut}
            
          />
        </Route>  */}
        <Route exact path='/' render={(props) => (
          <Main
            {...props}
            currentUser={this.state.currentUser}
            // handleLogin={this.handleLogin}
            handleLogOut={this.handleLogOut}
          />
        )}
        />

        <Route path='/register' render={(props) => (
          <Register
            {...props}
            // handleChange={this.handleChange}
            handleRegister={this.handleRegister}
         />
        )}
        />
         


        <Link to='/register'><p>Sign Up</p></Link>
      </div>
    )
  }
}

export default withRouter(App)