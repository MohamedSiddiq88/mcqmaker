import React, { useEffect } from 'react'

function TextArea({tempQuestion,setTempQuestion}) {

  return (
    <div>
      <textarea className='question-text' value={tempQuestion} onChange={(e)=>setTempQuestion(e.target.value)}></textarea>
    </div>
  )
}

export default TextArea
