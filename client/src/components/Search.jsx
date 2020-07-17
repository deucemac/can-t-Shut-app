import React from 'react'

export default function Search(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        value={props.value}
        type='text'
        name='search'
        placeholder='Search'
        onChange={props.onChange}
      />
     
   </form>
  )
}
