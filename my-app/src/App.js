import logo from './logo.svg';
import './App.css';
import reciept from './reciept.jpeg';

import Tesseract from 'tesseract.js';

Tesseract.recognize(
  {reciept},'eng',
  { 
    logger: m => console.log(m) 
  }
)
.catch (err => {
  console.error(err);
})
.then(result => {
  // Get Confidence score
  let confidence = result.confidence
 
  let text = result.text
  console.log("the text is",text)
  console.log(confidence)

})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reciept} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
