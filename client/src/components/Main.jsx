import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import Topics from './ShowTopics'
import { Link } from 'react-router-dom'
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
    // const TOPICS = 

    return (
      <main>
        <div>
          <h1>Welcome {this.props.currentUser.username}!</h1>
        </div>
        <Search onChange={this.searchChange} onSubmit={this.searchSubmit} value={this.state.filterValue} />
        <div>
          <button onClick={this.props.handleLogOut}>sign out</button>
        </div>
        <div>
          <img src={this.props.currentUser.img} />
        </div>
        
        
        <ShowTopics topics={topics} />

        <Route path='/topics/:id' render={(props) => {
          const { id } = props.match.params;
        return <TopicThread
          id={id}
          topics={topics}
        />
      }}
        />

        

        
        
     
       
     </main>
    )
  }
}
