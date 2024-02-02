import { useState } from 'react';
import './App.css';
import CompleteButton from './components/CompleteButton';
import InputText from './components/InputText';
import NextPreviousButton from './components/NextPreviousButton';
import TextArea from './components/TextArea';

function App() {
  // mcq array
  // options array inside mcq array
  // one text area for qestion
  // four input box for options
  // previous and next button
  // complete button
  // --------advance
  // after clickcing the complete button generate mcq with random option (HTML file)
const [tempQuestion,setTempQuestion] = useState("");
    const [indexOfQuestion,setIndexOfQuestion]=useState(1);
const [option,setOption]=useState(['','','','']);


  return (
    <div className="container-fluid parent">
      <div className='main-container'>
      <label>Question {indexOfQuestion}</label>
      <TextArea 
      tempQuestion={tempQuestion}
      setTempQuestion={setTempQuestion}
      ></TextArea>
      <label>Options</label>
      {
        option.map((ele,ind)=>(
          <InputText option={option[ind]} 
          setOption={(newValue)=>{
            const newOptions=[...option];
            newOptions[ind]=newValue;
            setOption(newOptions);
          }}key={ind}></InputText>
        ))
      }

      {/* <InputText option={optionA} setOption={setOptionA} ></InputText>
      <InputText option={optionB} setOption={setOptionB} ></InputText>
      <InputText option={optionC} setOption={setOptionC} ></InputText>
      <InputText option={optionD} setOption={setOptionD} ></InputText> */}
      
      <div className='btn-main-container'>
        <div className='dummy'>
          {/* dummy */}
          complete    
        </div>
      <div className='btn-container'>

      <NextPreviousButton 
      name={'Previous'} 
      color={'btn-outline-primary'}
      tempQuestion={tempQuestion}
      setTempQuestion={setTempQuestion}
      option={option}
      setOption={setOption}
      index={indexOfQuestion}
      setIndex={setIndexOfQuestion}
      ></NextPreviousButton>


      <NextPreviousButton 
      name={'Next'} 
      color={'btn-primary'} 
      tempQuestion={tempQuestion}
      setTempQuestion={setTempQuestion}
      // option={[optionA,optionB,optionC,optionD]}
      option={option}
      setOption={setOption}
      index={indexOfQuestion}
      setIndex={setIndexOfQuestion}
      ></NextPreviousButton>
      </div>
      <CompleteButton></CompleteButton>
      </div>

      </div>
    </div>
  );
}

export default App;
