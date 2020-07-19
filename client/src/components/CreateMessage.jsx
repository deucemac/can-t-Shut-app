import React, { Component } from 'react'

export default class CreateMessage extends Component {
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
    const { handleMessageCreate, history, id } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleMessageCreate(this.state);
        history.push(`/topics/${id}`);
      }}>
        <h3>Create Food</h3>
        <label>
          Name:
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
