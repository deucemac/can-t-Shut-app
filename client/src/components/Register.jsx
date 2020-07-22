import React, { Component } from 'react'
import '../css/Register.css'

export default class Register extends Component {
  state = {
    username: "",
    password: "",
    img: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password, img } = this.state;
    const { handleRegister, history } = this.props;
    console.log('hello')

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(this.state);
        history.push('/');
      }}>
        <h3>Register</h3>
        <label>
          Username:
          <input
            className='register2'
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className='register3'
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          img:
          <input
            className='register4'
            type="text"
            name="img"
            value={img}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className='submit-user'>Submit</button>
      </form>
    )
  }
}

