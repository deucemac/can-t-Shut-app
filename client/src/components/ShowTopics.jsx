import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowTopics(props) {
  const topics = props.topics.map(topic => (
    <React.Fragment key={topic.id}>
      <Link to={`/topics/${topic.id}`}><p>{topic.name}</p></Link>
    </React.Fragment>
  ))
    
  return (
    <div>
      {topics}
    </div>
  )
}
