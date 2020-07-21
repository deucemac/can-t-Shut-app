import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/Topicthread.css'
import { addMessage } from '../services/api-helper'
import CreateMessage from './CreateMessage'
import { getAllUsers, currentUser } from '../services/api-helper'
import '../css/Topicthread.css'


class TopicThread extends Component {
  state = {
    messages: [],
    users: [],
    currentUser: [],
    edit: null,
    editContent: ''
   
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

  editToggle = async (message) => {
    this.setState({
      edit: message.id,
      editContent: message.content
    })
  }

  handleEditChange = (e) => {
    const { value } = e.target
    this.setState({
      editContent: value
    })
  }

  handleEditSubmit = () => {
    this.props.handleMessageUpdate(this.state.edit, { content: this.state.editContent })
    this.setState({
      edit: null,
      editContent: ''
    })
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
          
          <h1 className='topic-name'>{topic.name}</h1>
          }
        <div className='messages'>
        {topic && 
              topic.messages.map((message) => {
                let person = this.state.users.find(user => message.user_id == user.id)
                let currentUser = this.state.currentUser
                let latestMessageIndex = topic.messages.length - 1
                // console.log(message[2])
                return (
                  <>
                    <div className='message-body' style={topic.messages.indexOf(message) == latestMessageIndex ? { marginBottom: '50px' } : { marginBottom: '0px' } }>
                    {currentUser && <div className='message-container'
                      style={currentUser.id == message.user_id ? { backgroundColor: '#B7F3E8' } : { backgroundColor: 'white'} }>  
                        {this.state.edit == message.id ?
                          <>
                            <input
                            value={this.state.editContent}
                            name='editContent'
                            onChange={this.handleEditChange} />
                            <button onClick={this.handleEditSubmit}>submit</button>
                          </> :
                          <p key={message.id}>{message.content}</p>}
                    {person && <img className='user-image' src={person.img} alt='img' />}
                  </div>
                  }
                    <div className='button-container'>
                    {person && <p>-{person.username}</p>}
                      {currentUser.id == message.user_id && <><p onClick={() => this.props.handleMessageDelete(message)} className='delete'>delete</p>
                      <p onClick={() => this.editToggle(message)} className='delete'>edit</p></>}
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