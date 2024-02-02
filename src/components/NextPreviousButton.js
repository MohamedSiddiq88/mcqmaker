import React, { useContext, useEffect, useState } from 'react'
import { MultipleQuestionContext } from '../questionContext/McqContext';

function NextPreviousButton({name,color,tempQuestion,setTempQuestion,option,setOption,index,setIndex}) {
    const {question,setQuestion} = useContext(MultipleQuestionContext);
    // const [index,setIndex]=useState(0);
    useEffect(()=>{
        console.log(question)
    }) 
    
    
    function addQuestion(){
      let allOptionsNotEpty = true;
      option.forEach((opt)=>{
        if(opt===""){
          allOptionsNotEpty=false;
          return;
        }
      })
      if(tempQuestion !== "" && allOptionsNotEpty){
        console.log("next",index)
        if(index>question.length){
          setQuestion([...question,{
            question:tempQuestion,
              options:option
        }])
        setTempQuestion("");
        setOption(['','','',''])
        setIndex((prev) => prev + 1);
        }else if(question[index]==undefined){
          setTempQuestion("");
        setOption(['','','',''])
        setIndex((prev) => prev + 1);
        }
        else{
          setTempQuestion(question[index].question);
          // setOption([...question[index].options]); //short form of the below line
          setOption([(question[index].options[0]),(question[index].options[1]),question[index].options[2],question[index].options[3]])
          setIndex((prev) => prev + 1);
        }
      }else{
        alert("please check all fields")
      }
      
        

    }

    function previous(){
      console.log("privious",index)

      if(index-2>=0){
        setTempQuestion(question[index-2].question);
        setOption([(question[index-2].options[0]),(question[index-2].options[1]),question[index-2].options[2],question[index-2].options[3]])
        console.log("privious",index)
        setIndex((pre)=>pre-1)
      }else{
        alert("ther is no pervious question")
      }
      
    }

  return (
    <div>
      <button className={`btn ${color} nextprevious`} onClick={()=>name=="Next"?addQuestion():previous()}>{name}</button>
    </div>
  )
}

export default NextPreviousButton
