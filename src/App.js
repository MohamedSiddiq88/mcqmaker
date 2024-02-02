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
  
  const [question,setQuestion] = useState([]);
  const [options,setOptions] = useState([]);
  return (
    <div className="container-fluid parent">
      <div className='main-container'>
      <label>Question</label>
      <TextArea></TextArea>
      <label>Options</label>
      <InputText></InputText>
      <InputText></InputText>
      <InputText></InputText>
      <InputText></InputText>
      <div className='btn-main-container'>
        <div className='dummy'>
          {/* dummy */}
          complete    
        </div>
      <div className='btn-container'>
      <NextPreviousButton name={'Previous'} color={'btn-outline-primary'}></NextPreviousButton>
      <NextPreviousButton name={'Next'} color={'btn-primary'}></NextPreviousButton>
      </div>
      <CompleteButton></CompleteButton>
      </div>

      </div>
    </div>
  );
}

export default App;
