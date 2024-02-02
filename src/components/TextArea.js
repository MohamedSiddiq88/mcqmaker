import React from 'react'

function TextArea({tempQustion,setTempQuestion}) {
  return (
    <div>
      <textarea className='question-text' value={tempQustion} onChange={(e)=>setTempQuestion(e.target.value)}></textarea>
    </div>
  )
}

export default TextArea
