import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import Topics from './Topics'
import { Link } from 'react-router-dom'


export default class Main extends Component {


  render() {

    return (
      <main>
        <h1>Home</h1>
        <button onClick={this.props.handleLogout}>sign out</button>
        
        {/* <Route path='/topics' render={(props) => (
          <Topics
            {...props}
            handleLogOut={this.props.handleLogOut}
          />
        )} /> */}
       
     </main>
    )
  }
}
