import './App.css';
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
  return (
    <div className="container">
      <div className='main-container'>
      <TextArea></TextArea>
      </div>
    </div>
  );
}

export default App;
