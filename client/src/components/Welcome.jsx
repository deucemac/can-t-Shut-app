import React from 'react'
import '../css/Welcome.css'

export default function Welcome() {
  return (
    <>
      <div className='welcome-page'>
        <div class='upper-icon'>
          <i class="fas fa-pencil-alt fa-7x"></i>
        </div>
        <div className='greeting-container'>
          <h1 className='greeting'>Get Started!</h1>
        </div>
        <div className='lower-icon'>
          <i class="far fa-envelope-open fa-7x"></i>
        </div>
      </div>
    </>
  )
}
