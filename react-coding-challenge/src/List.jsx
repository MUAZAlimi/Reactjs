// import React from 'react'

import ListItem from "./ListItem"

// eslint-disable-next-line react/prop-types 
const List = ({items}) => {
  return (
    <ul>
        {/* eslint-disable-next-line react/prop-types  */}
      {items.map(item => 
        <ListItem key={item.id} item={item}/>
      )}
    </ul>
  )
}

export default List
