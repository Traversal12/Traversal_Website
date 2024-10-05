import React from 'react'

function MeshGradient({size, position}) {
  return (
    <div className={`${size} ${position} rounded-[40%] absolute bg-[#174f5e] blur-3xl `}></div>
  )
}

export default MeshGradient