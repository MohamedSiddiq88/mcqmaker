import React, { useState } from 'react'

function InputText({option,setOption}) {

  return (
    <div>
      <textarea className='option-text' value={option} onChange={(e)=>setOption(e.target.value)}></textarea>
    </div>
  )
}

export default InputText
