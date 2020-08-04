import React from 'react'
import '../css/Welcome.css'

export default function Welcome() {
  return (
    <>
      <div className='welcome-page'>
        <div className='upper-icon'>
          <i className="fas fa-pencil-alt fa-7x"></i>
        </div>
        <div className='greeting-container'>
          <h1 className='greeting'>Get Started!</h1>
        </div>
        <div className='lower-icon'>
          <i className="far fa-envelope-open fa-7x"></i>
        </div>
      </div>
    </>
  )
}
