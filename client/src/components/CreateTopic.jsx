import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/Createtopic.css'

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
          className='create-topic'
        name='topic'
        type='text'
        placeholder='Create a Topic'
        value={this.state.name}
        onChange={this.handleChange} 
        />
        <button className="make-topic">+</button>
        
      </form>
      
    )
  }
}
export default withRouter(CreateTopic)