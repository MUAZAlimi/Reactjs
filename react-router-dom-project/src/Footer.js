import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <div>
      <p>CopyWright &copy;{date.getFullYear()}</p>
    </div>
  )
}

export default Footer
