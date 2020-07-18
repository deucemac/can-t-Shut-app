import React from 'react'

export default function Messages(props) {
  const messages = props.messages.filter(messages => 
    messages.topic_id === parseInt(props.id)
  )
  return (
    <div>
      {messages && messages.map(message => (
        <p>{message.content}</p>
      ))}
    </div>
  )
}
