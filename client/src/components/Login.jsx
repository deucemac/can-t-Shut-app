import React, { Component } from 'react'

export default class Login extends Component {

  render() {
    return (
      <>
        <header>

          {this.props.currentUser ?
            <h2>Hello {this.props.currentUser.username}</h2> :
            <div className="login">
              <form onSubmit={this.props.handleLogin}>
                <div className="pair">
                  <label htmlFor='username'>Username</label>
                  <input name='username' type='text' value={this.props.userData.username} onChange={this.props.handleChange} />
                </div>

                <div className="pair">
                  <label htmlFor='password'>Password</label>
                  <input name='password' type='password' value={this.props.userData.password} onChange={this.props.handleChange} />
                </div>

                <input type='submit' value="Login" />
              </form>
            </div>

          }
<button onClick={this.props.signOut}>Sign out</button>
        </header>
      </>
    )
  }
}
