import React from 'react'
import '../css/Search.css'

export default function Search(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        className='search'
        value={props.value}
        type='text'
        name='search'
        placeholder='Search for Topic'
        onChange={props.onChange}
      />
     
   </form>
  )
}
