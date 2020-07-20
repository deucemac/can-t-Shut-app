import React, { Component } from 'react'

export default class UpdateFood extends Component {
  state = {
    content: ''
  }

  componentDidMount() {
    if (this.props.message) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.message !== this.props.message ) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      content: this.props.message.content
    })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      content: value
    })
  }

  render() {
    // const { handleMessageUpdate, message, history, id } = this.props;
    const { handleMessageUpdate, history, id } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleMessageUpdate(id, this.state);
        // handleMessageUpdate();
        history.push('/topics/:id');
      }}>
        <h3>Update Food</h3>
        <label>
          Edit Content:
          <input
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
