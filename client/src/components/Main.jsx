import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import { Link, Route, withRouter} from 'react-router-dom'
import '../css/Main.css'
import { getAllTopics, getAllMessages, addTopic, addMessage } from '../services/api-helper'
// import ShowTopics from './ShowTopics'
import Search from './Search'
import TopicThread from './TopicThread'
import CreateTopic from './CreateTopic'



class Main extends Component {
  state = {
    topics: [],
    messages: [],
    message: '',
    currentTopics: false
   
  }

  componentDidMount() {
    this.fetchTopics();
    // this.fetchMessages();
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

  handleMessageCreate = async (e) => {
    e.preventDefault();
    const newMessage = await addMessage(this.props.match.params.id, { message: this.state.message })
    this.setState(prevState =>({
      messages: [...prevState.messages, newMessage]
    }))
  }


  // fetchMessages = async () => {
  //   const id = this.props.topics.id
  //   console.log(id)
  //   const messages = await getAllMessages(parseInt(id))
  //   this.setState({ messages })
  //   console.log(this.state.messages)
  // }

  // addMessage = async (messageContent) => {
  //   const newMessage = addMessage(messageContent)
  //   this.setState(prevState => ({
  //     messages
  //   }))
  // }

  showTopics = () => {
    this.setState(prevState=>({
      currentTopics: !prevState.currentTopics
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
        {this.state.currentTopics ?  this.props.topics.map(topic => (
          <>
            <React.Fragment key={topic.id}>
              <Link to={`/topics/${topic.id}`}><p>{topic.name}</p></Link>
            </React.Fragment>
          </>
        )) : ''} 
          </div>
        </div>
        
        <div className='middle-container'>
        <Route path='/topics/:id' render={(props) => (
          <TopicThread
            {...props}
            topics={this.state.topics}
          />
          )}
          />
          </div>


        
        
       
        
        <div className='right-container'>
          <div>
          <button onClick={this.props.handleLogOut}>sign out</button>
        </div>
         <div className='img-container-two'>
          <img className='img-profile' src={this.props.currentUser.img} alt='profile'/>
          </div>
          </div>
        {/* <Route path='/' >
          <Search onChange={this.searchChange} onSubmit={this.searchSubmit} value={this.state.filterValue} />
        </Route> */}
        
          {/* <Route path='/topics/:id' render={(props) => 
        <TopicThread topics={topics} />
      }/> */}
       
        
          
        {/* <CreateMessage handleMessageCreate={} /> */}
      
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
export default withRouter(Main)