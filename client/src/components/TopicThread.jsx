import React, { Component } from 'react'
import { getOneTopic } from '../services/api-helper'
// import { withRouter } from 'react-router-dom'


export default class TopicThread extends Component {
  state = {
    topic: null,
  }

  componentDidMount() {
    this.fetchTopic();
  }


  fetchTopic = async () => {
    const topic = await getOneTopic(this.props.id)
    this.setState({ topic })
    // console.log(this.state.topic)
  }

  
  
  render() {
    const { topic } = this.state;
    // const messages = this.state.topic.messages.map(message => (<p>{message.content}</p>)
    // )

    return (
      <div>
        {topic && (
          <>
            <h1>{this.state.topic.name}</h1>
            {/* {messages} */}
          </>
        )}
      </div>
    )
  }
}
 