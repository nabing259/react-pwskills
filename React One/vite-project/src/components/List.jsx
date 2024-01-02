import React from 'react'

function List({items}) {
  return (
      <div>
          <ul>
              {items.map((item) => <li>item</li>)}
          </ul>
    </div>
  )
}

export default List