import React, { Component } from 'react'
// import { getOneTopic } from '../services/api-helper'
// import {addMessage} from '../services/api-helper'
import { withRouter } from 'react-router-dom'
import '../css/Topicthread.css'


class TopicThread extends Component {
  // state = {
  //   topic: null,
  //   // messages: null,
  //   message: ''
  // }

  // componentDidMount() {
  //   this.fetchTopic();
  // this.changeTopic();
  // this.addMessage();
  // }


  // fetchTopic = async () => {
  //   const topic = await getOneTopic(this.props.match.params.id)
  // if (!this.state.topic)
  // this.setState({ topic })
  // console.log(this.state.topic)
  // console.log(this.state.topic.messages[0])
  // }

  

  // changeTopic = async () => {
  //   const topic = await getOneTopic(this.props.match.params.id)
  //   if (this.state.topic) {
  //     this.setState(prevState => ({
  //       topic: {...prevState.topic, topic}
  //     }))
  //   }
  // }

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


  
  
  render() {
    // const { topic } = this.state;

    // return (
    //   <div>
    //     {topic && (
    //       <>
    //         <h1>{this.state.topic.name}</h1>
    //         {topic.messages.map(message => (
    //           <p>{message.content}</p>
    //         ))}
    //       </>
    //     )}
    /* {topic &&
          <form onSubmit={this.addMessage}>
          <input
          name='message'
          type='text'
          value={this.state.message}
          onChange={this.handleChange} 
          />
          <button>send</button>
        </form>
        } */
    //     </div>
    //   )
    // }
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
          topic.messages.map(message => (
              <p key={message.id}>{message.content}</p>    
          ))
          }
          </div>
          </div>
      </>
    )
  }
}
export default withRouter(TopicThread)