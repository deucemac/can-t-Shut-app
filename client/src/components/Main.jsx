import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import { Link, Route, withRouter} from 'react-router-dom'
import '../css/Main.css'
import { getAllTopics, addTopic, addMessage, deleteMessage, messageUpdate } from '../services/api-helper'
// import ShowTopics from './ShowTopics'
import Search from './Search'
import TopicThread from './TopicThread'
import CreateTopic from './CreateTopic'
import UpdateMessage from './UpdateMessage'




class Main extends Component {
  state = {
    topics: [],
    messages: [],
    message: '',
    currentTopics: false
   
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

  showTopics = () => {
    this.setState(prevState=>({
      currentTopics: !prevState.currentTopics
    }))
  }

  addNewMessage = (newMessage) => {
    const topicUpdate = this.state.topics.find(topic => topic.id == newMessage.topic_id)
    console.log(topicUpdate)
    topicUpdate.messages.push(newMessage)
    this.setState(prevState => ({
      topics: prevState.topics.map(topic => topicUpdate.id == topic.id ? topicUpdate : topic)
    }))
  }

  handleMessageDelete = async (message) => {
    const topicRemove = this.state.topics.find(topic => topic.id == message.topic_id)
    const index = topicRemove.messages.indexOf(message)
    await deleteMessage(topicRemove.id, message.id)
    topicRemove.messages.splice(index, 1)
    this.setState(prevState => ({
      topics: prevState.topics.filter(topic => topic.id !== topicRemove.id ? topicRemove : topic)
    }))
  }

  handleMessageUpdate = async (id, messageToChange) => {
   
    const updatedMessage = await messageUpdate(id, messageToChange)
    let topicEdit = this.state.topics.find(topic => topic.id == updatedMessage.topic_id)
    topicEdit.messages = topicEdit.messages.map(message => message.id == updatedMessage.id ? updatedMessage: message )
    this.setState(prevState => ({
      topics: prevState.topics.map(topic => topic.id == topicEdit.id ? topicEdit : topic)
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
        <div className='side-bar'>
        <div className='welcome'>
        {<h1>Welcome {this.props.currentUser.username}!</h1>}
        </div>
        <div className='img-container'>
            <img className='toggle-topics' src='https://images.unsplash.com/photo-1594846198287-f7aefab844de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' onClick={this.showTopics} />
            <div className='center'>Current Topics</div>
        </div>
        <div>
        <Search onChange={this.props.onChange} onSubmit={this.props.onSubmit} value={this.props.value}/>
          </div>
          <CreateTopic handleTopicCreate={this.handleTopicCreate} />
        <div>
        {this.state.currentTopics ?  this.state.topics.map(topic => (
          <>
            <React.Fragment key={topic.id}>
              <Link to={`/topics/${topic.id}`}><p>{topic.name}</p></Link>
            </React.Fragment>
          </>
        )) : ''} 
          </div>
        </div>
        
        {<div className='middle-container'>
        <Route path='/topics/:id' render={(props) => (
          <TopicThread
            {...props}
              topics={this.state.topics}
              addNewMessage={this.addNewMessage}
              handleMessageDelete={this.handleMessageDelete}
              handleMessageUpdate={this.handleMessageUpdate}
          />
          )}
          />
          </div>}

        

        
        
       
        
        <div className='right-container'>
          <div>
          <button className='sign-out' onClick={this.props.handleLogOut}>sign out</button>
        </div>
         <div className='img-container-two'>
          <img className='img-profile' src={this.props.currentUser.img} alt='profile'/>
          </div>
          </div>
        
        
        
          
       
        
          
        
      
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
        <Link to='/register'><button className='sign-up'>sign up</button></Link>
        

     
        
          

        

        
        
     
       
     </main>
    )
  }
}
export default withRouter(Main)