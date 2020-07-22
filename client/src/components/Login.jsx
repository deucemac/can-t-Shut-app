import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Login.css'
// import Main from './Main'


export default class Login extends Component {

  render() {
    return (
      <>
        <header>

            <h1>Can't Shut App</h1>
            <div className="login">
              <form onSubmit={this.props.handleLogin}>
                <div className="pair">
                  <label htmlFor='username'>Username:</label>
                  <input className='register' name='username' type='text' value={this.props.userData.username} onChange={this.props.handleChange} />
                </div>

                <div className="pair">
                  <label htmlFor='password'>Password:</label>
                  <input className='register1' name='password' type='password' value={this.props.userData.password} onChange={this.props.handleChange} />
                </div>

                {/* <input type='submit'/> */}
              <button className='submit-user' type='submit'>Log In</button>
              <Link to='/register'><button className='submit-user1'>Register</button></Link>
              </form>
            </div>
              
          <div className='image-login' >
            <img className='log-in-image' src='https://images.unsplash.com/photo-1453838956707-38a7aa3cd62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80' />
            <img className='log-in-image' src='https://images.unsplash.com/photo-1587751395859-9fa4224678a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80' />
            <img className='log-in-image' src='https://images.unsplash.com/photo-1556159992-e189f8e50104?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80' />
            </div>
         
        </header>
      </>
    )
  }
}
