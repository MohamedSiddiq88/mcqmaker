import React, { createContext, useState } from 'react'

const MultipleQuestionContext = createContext(null);

function McqContext({children}) {
    const [question,setQuestion] = useState([]);
    const [options,setOptions] = useState([]);  
  return (
    <MultipleQuestionContext.Provider
    value={{
        question,
        setQuestion,
        options,
        setOptions
    }}
    >
      {children}
    </MultipleQuestionContext.Provider>
  )
}

export default McqContext
export {MultipleQuestionContext};
