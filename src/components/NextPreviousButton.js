import React from 'react'

function NextPreviousButton({name,color}) {
    
  return (
    <div>
      <button className={`btn ${color} nextprevious`}>{name}</button>
    </div>
  )
}

export default NextPreviousButton
