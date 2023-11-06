import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <footer className='Footer'>
      <p>CopyWright &copy;{date.getDay()/date.getMonth()/date.getFullYear()}</p>
    </footer>
  )
}

export default Footer
