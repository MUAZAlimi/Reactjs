// import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({buttonText, reqType, setReqType}) => {
  return (
    <button className={buttonText === reqType ? "selected" : null}
        type="button"
        onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  )
}

export default Button
