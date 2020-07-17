import React, { Component } from 'react'
import { getOneTopic } from '../services/api-helper'

export default class TopicThread extends Component {
  state = {
    name: null,
    messages: []
  }

  componentDidMount() {
    this.fetchTopic();
    
  }


  fetchTopic = async () => {
    const topic = await getOneTopic(this.props.id)
    this.setState({
      name: topic.name
    })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
