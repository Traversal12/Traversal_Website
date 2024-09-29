import React from 'react'

function Button({title,fill}) {
  return (
    <button style={{border:"1px solid #00b7db"}} className={`w-32 p-4 rounded-2xl ${fill}`}>{title}</button>
  )
}

export default Button