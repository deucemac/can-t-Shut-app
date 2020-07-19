import React, { Component } from 'react'
// import { getOneTopic } from '../services/api-helper'
// import {addMessage} from '../services/api-helper'
import { withRouter } from 'react-router-dom'
import '../css/Topicthread.css'
import { getAllMessages, addMessage } from '../services/api-helper'
import Messages from './Messages'
import CreateMessage from './CreateMessage'
import { getAllUsers } from '../services/api-helper'
import '../css/Topicthread.css'


class TopicThread extends Component {
  state = {
    messages: [],
    users: []
   
  }

  componentDidMount() {
  //   this.fetchTopic();
  // this.changeTopic();
  // this.addMessage();
    this.fetchUsers();
  }




  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState(prevState => ({
  //     message: {
  //       ...prevState.message,
  //       [name]: value
  //     }
  //   }))
  // }
  // addMessage = async (e) => {
  //   // e.preventDefault()
  //   const message = await addMessage(this.props.id, this.state.message)
  //   this.setState({ message })
  // }

  // componentDidMount() {
  //   this.fetchMessages();
  // }

  // fetchMessages = async () => {
  //   // const id = this.props.match.params.id
  //   let id = this.props.match.params.id
  //   console.log(id)
  //   const messages = await getAllMessages(parseInt(id))
  //   this.setState({ messages })
  //   console.log(this.state.messages)
  // }

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
    console.log(topic)
    
    return (
      <>
        <div className='thread-container'>
        {topic &&
          <div>
          <h1>{topic.name}</h1>
          </div>}
        <div className='messages'>
        {topic && 
              topic.messages.map(message => {
                let person = this.state.users.find(user => message.user_id == user.id)
                console.log(person)
                return (
                  <>
                  <div className='message-container'>
              <p key={message.id}>{message.content}</p>
                      {person && <img className='user-image' src={person.img} />}
                    </div>
                    <div className='button-container'>
                      <p onClick={() => this.props.handleMessageDelete(message)} className='delete'>delete</p>
                      <p className='delete'>edit</p>
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