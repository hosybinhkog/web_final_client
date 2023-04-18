import React from 'react'

const ButtonSubmit = ({ titleButton, cssButton }) => {
  return (
    <>
      <div className={`${cssButton}`}>
        <button>{titleButton}</button>
      </div>
    </>
  )
}

export default ButtonSubmit
