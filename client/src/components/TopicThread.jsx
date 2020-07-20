import React, { Component } from 'react'
// import { getOneTopic } from '../services/api-helper'
// import {addMessage} from '../services/api-helper'
import { withRouter } from 'react-router-dom'
import '../css/Topicthread.css'
import { getAllMessages, addMessage } from '../services/api-helper'
import Messages from './Messages'
import CreateMessage from './CreateMessage'
import { getAllUsers, currentUser } from '../services/api-helper'
import '../css/Topicthread.css'


class TopicThread extends Component {
  state = {
    messages: [],
    users: [],
    currentUser: []
   
  }

  componentDidMount() {
    this.fetchUsers();
    this.getCurrentUser();
  }
  getCurrentUser = async () => {
    let user = await currentUser()
    this.setState({
      currentUser: user
    })
  }

  

  handleMessageCreate = async (message) => {
    
    const newMessage = await addMessage(this.props.match.params.id,  message )
    this.props.addNewMessage(newMessage)
  }

  fetchUsers = async () => {
    const users = await getAllUsers()
    this.setState({ users })
  }
    

  render() {
    
    const { id } = this.props.match.params
    let topic = this.props.topics.find(topic => {
      return topic.id === parseInt(id)
    })

    
    


    
    return (
      <>
        <div className='thread-container'>
        {topic &&
          
          <h1>{topic.name}</h1>
          }
        <div className='messages'>
        {topic && 
              topic.messages.map(message => {
                let person = this.state.users.find(user => message.user_id == user.id)
                let currentUser = this.state.currentUser
                console.log(currentUser)
                console.log(person)
                return (
                  <>
                    <div className='message-body'>
                    {currentUser && <div className='message-container'
                      style={currentUser.id == message.user_id ? { backgroundColor: '#B7F3E8' } : { backgroundColor: 'white'}}>  
                    <p key={message.id}>{message.content}</p>
                    {person && <img className='user-image' src={person.img} />}
                  </div>
                  }
                    <div className='button-container'>
                    {person && <p>-{person.username}</p>}
                      <p onClick={() => this.props.handleMessageDelete(message)} className='delete'>delete</p>
                      <p className='delete'>edit</p>
                      </div>
                      </div>
                  </>
                )
              })
          }
          </div>
          
          
          
          </div>
          <div>
            <CreateMessage handleMessageCreate={this.handleMessageCreate}/>
          </div>
      </>
    )
  }
}
export default withRouter(TopicThread)