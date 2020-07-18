import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import { Link, Route} from 'react-router-dom'
import '../css/Main.css'
import { getAllTopics, addTopic } from '../services/api-helper'
// import ShowTopics from './ShowTopics'
import Search from './Search'
import TopicThread from './TopicThread'
import CreateTopic from './CreateTopic'


export default class Main extends Component {
  state = {
    topics: []
   
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = async () => {
    const topics = await getAllTopics();
    this.setState({ topics });
    console.log(this.state.topics)
  }

  handleTopicCreate = async (topicInfo) => {
    const newTopic = await addTopic(topicInfo);
    this.setState(prevState => ({
      topics: [...prevState.topics, newTopic]
    }))
  }



  render() {

    if (!this.props.currentUser ) return <div>  <Login
    handleChange={this.props.handleChange}
    userData={this.props.userData}
    handleLogin={this.props.handleLogin}
    currentUser={this.props.currentUser}
  // handleLogOut={this.handleLogOut}
  /></div>
  
    return (
      <main>
        <div>
        {<h1>Welcome {this.props.currentUser.username}!</h1>}
        </div>
        <div>
        <Search onChange={this.props.onChange} onSubmit={this.props.onSubmit} value={this.props.value}/>
       </div>
        <div>
          <button onClick={this.props.handleLogOut}>sign out</button>
        </div>
        <div>
        {this.props.topics.map(topic => (
          <>
            <React.Fragment key={topic.id}>
      <Link to={`/topics/${topic.id}`}><p>{topic.name}</p></Link>
    </React.Fragment>
          </>
        ))} 
        </div>
        <div>
          <img src={this.props.currentUser.img} alt='profile'/>
        </div>
        <CreateTopic handleTopicCreate={this.handleTopicCreate} />
        {/* <Route path='/' >
          <Search onChange={this.searchChange} onSubmit={this.searchSubmit} value={this.state.filterValue} />
        </Route> */}
        
          {/* <Route path='/topics/:id' render={(props) => 
        <TopicThread topics={topics} />
      }/> */}
        <Route path='/topics/:id'>
          <TopicThread topics={this.state.topics}/>
        </Route>
      
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
