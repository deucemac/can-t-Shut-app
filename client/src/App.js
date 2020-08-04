import { loginUser, verifyUser, registerUser, removeToken } from './services/auth'

import './App.css';
import { Link, withRouter } from 'react-router-dom'
import Main from './components/Main'
// import Register from './components/Register'
// import ShowTopics from './components/ShowTopics'
// import Search from './components/Search'


import React, { Component } from 'react'
import { getAllTopics } from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      userData: {
        username: '',
        password: ''
      },
      // filterValue: '',
      // filteredTopics: null,
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
    // const topics = await getAllTopics()
    // this.setState({
    //   topics
    // })
   
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

  // searchChange = (e) => {
  //   const filter = () => {
  //     const filteredTopics = this.state.topics.filter(topic => {
  //       return topic.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
  //     })
  //     this.setState({ filteredTopics })
  //   }
  //   this.setState({ filterValue: e.target.value }, filter)
  // }

  // searchSubmit = (e) => {
  //   e.preventDefault()
  // }




  render() {
    const topics = this.state.filteredTopics ? this.state.filteredTopics : this.state.topics
    
    return (
      <div>
        
        
          <Main
            currentUser={this.state.currentUser}
            handleLogin={this.loginSubmit}
            handleLogOut={this.handleLogOut}
          handleRegister={this.handleRegister}
          userData={this.state.userData}
          handleChange={this.handleChange}
          
          // onChange={this.searchChange}
          // onSubmit={this.searchSubmit}
          // value={this.state.filterValue}
          // topics={topics}
        />
        
        
      
        
      </div>
    )
  }
}

export default withRouter(App)