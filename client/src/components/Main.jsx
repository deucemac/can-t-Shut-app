import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import { Route} from 'react-router-dom'
import '../css/Main.css'
import { getAllTopics } from '../services/api-helper'
import ShowTopics from './ShowTopics'
import Search from './Search'
import TopicThread from './TopicThread'


export default class Main extends Component {
  state = {
    topics: [],
    filterValue: '',
    filteredTopics: null
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = async () => {
    const topics = await getAllTopics();
    console.log(topics)
    this.setState({ topics });
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

    if (!this.props.currentUser ) return <div>loading</div>
    return (
      <main>
        <div>
        {<h1>Welcome {this.props.currentUser.username}!</h1>}
        </div>
       
        <div>
          <button onClick={this.props.handleLogOut}>sign out</button>
        </div>
        <div>
          <img src={this.props.currentUser.img} />
        </div>
        <Route exact path='/' >
          <Search onChange={this.searchChange} onSubmit={this.searchSubmit} value={this.state.filterValue} />
          
        </Route>
        
        
          <Route path='/topics/:id' render={(props) => 
        <TopicThread {...props} />
        }/>
      
        <Route path='/login'>
          <Login
            handleChange={this.props.handleChange}
            userData={this.props.userData}
            handleLogin={this.props.handleLogin}
            currentUser={this.props.currentUser}
          // handleLogOut={this.handleLogOut}
          
          />
        </Route>
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            // handleChange={this.handleChange}
            handleRegister={this.props.handleRegister}
         />
        )}
        />
        
        

     
        
          

        

        
        
     
       
     </main>
    )
  }
}
