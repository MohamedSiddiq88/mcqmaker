import React, { useContext, useEffect } from 'react'
import { MultipleQuestionContext } from '../questionContext/McqContext';

function NextPreviousButton({name,color,tempQuestion}) {
    const {question,setQuestion} = useContext(MultipleQuestionContext);
    
    useEffect(()=>{
        console.log(question)
    },[question]) 
    
    
    function addQuestion(){
        setQuestion({
            question:tempQuestion,
            options:[]
        })
    }
  return (
    <div>
      <button className={`btn ${color} nextprevious`} onClick={()=>name=="Next"?addQuestion():""}>{name}</button>
    </div>
  )
}

export default NextPreviousButton
