import React from 'react'
import List from './List'

function Profile({ name, age }) {
    const items = ["HTML", "JS", "CSS", "REACT", "TailWind"];
  return (
      <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <List items={items}/>
    </div>
  )
}

export default Profile