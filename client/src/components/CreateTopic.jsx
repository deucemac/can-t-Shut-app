import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class CreateTopic extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
}



  render() {
    const { handleTopicCreate, history } = this.props;
    return (
      
      <form onSubmit={(e) => {
        e.preventDefault()
        handleTopicCreate(this.state)
        history.push('/')
        }}>
        <input
        name='topic'
        type='text'
        value={this.state.name}
        onChange={this.handleChange} 
        />
        <button>+</button>
      </form>
      
    )
  }
}
export default withRouter(CreateTopic)