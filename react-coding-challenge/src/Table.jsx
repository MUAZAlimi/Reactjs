// import React from 'react'
import Row from './Row'

// eslint-disable-next-line react/prop-types
const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
        {/* eslint-disable-next-line react/prop-types */}
            {items.map(item => (
                <Row key={item.id} item={item}/>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
