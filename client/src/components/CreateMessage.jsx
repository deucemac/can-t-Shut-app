import React, { Component } from 'react'
import '../css/Createmessage.css'

export default class CreateMessage extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      content: value
    })
  }

  render() {
    const { handleMessageCreate } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleMessageCreate(this.state);
        this.setState({
          content: ''
        })

      }}>
        <h3></h3>
        <label>
          <input
            className='send'
            placeholder='Send a message...'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />
        </label>
        <button className='submit'>+</button>
      </form>
    )
  }
}
