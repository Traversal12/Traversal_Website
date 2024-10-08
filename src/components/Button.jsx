import { a } from 'framer-motion/client'
import React from 'react'

function Button({title,fill,visibility,link}) {
  return (
    <a href={link} target='_blank'><button style={{border:"1px solid #00b7db"}} className={`py-4 px-6 rounded-2xl ${fill} ${visibility}`}>{title}</button></a>
  )
}

export default Button