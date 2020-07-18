import { loginUser, verifyUser, registerUser, removeToken } from './services/auth'
import Login from './components/Login'
import './App.css';
import { Link, Route, withRouter } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import ShowTopics from './components/ShowTopics'
import Search from './components/Search'


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
      filterValue: '',
      filteredTopics: null,
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
    console.log(this.state.topics)
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

  searchChange = (e) => {
    const filter = () => {
      const filteredTopics = this.state.topics.filter(topic => {
        return topic.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
      })
      this.setState({ filteredTopics })
    }
    this.setState({ filterValue: e.target.value }, filter)
  }

  searchSubmit = (e) => {
    e.preventDefault()
  }


  render() {
    const topics = this.state.filteredTopics ? this.state.filteredTopics : this.state.topics
    
    return (
      <div>
        <h1>Welcome</h1>

        
        
          <Search onChange={this.searchChange} onSubmit={this.searchSubmit} value={this.state.filterValue} />
        
        
          <Main
            currentUser={this.state.currentUser}
            handleLogin={this.loginSubmit}
            handleLogOut={this.handleLogOut}
          handleRegister={this.handleRegister}
          userData={this.state.userData}
          handleChange={this.handleChange}
        />
        
        
        {/* {this.state.currentUser ? <ShowTopics topics={this.state.topics}/> : null } */}
        {topics.map(topic => (
          <>
            <React.Fragment key={topic.id}>
      <Link to={`/topics/${topic.id}`}><p>{topic.name}</p></Link>
    </React.Fragment>
          </>
        ))}
        
        
        

        
         


        <Link to='/register'><p>Sign Up</p></Link>
      </div>
    )
  }
}

export default withRouter(App)