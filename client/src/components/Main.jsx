import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import Topics from './Topics'
import { Link } from 'react-router-dom'
import '../css/Main.css'


export default class Main extends Component {
  state = {
    topics: []
  }

  // componentDidMount() {
  //   this.fetchTopics();
  // }

  fetchTopics = async () => {
    const topics = await 
  }

  render() {
   
    return (
      <main>
        <h1>Welcome {this.props.currentUser.username}!</h1>
        <button onClick={this.props.handleLogOut}>sign out</button>
        <img src={this.props.currentUser.img} />
        
        
     
       
     </main>
    )
  }
}
