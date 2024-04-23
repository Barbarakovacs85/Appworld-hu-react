import React, { useState} from 'react';
import './App.css'

function App() {
  const [value, setvalue] = useState('')
  return (
   <div className="App">
   <div className="container">
    <form>
      <input type="text" />
    </form>
   
    <div className="keypad">
    <button id="clear" className='highlight'>AC</button>
    <button className='highlight'>C</button>
    <button className='highlight'>÷</button>

    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button className='highlight'>*</button>
    
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button className='highlight'>-</button>
    
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button className='highlight'>+</button>

    <button>0</button>
    <button>.</button>
    <button id='equal' className='highlight'>=</button>
    </div>
   </div>
   </div>
  )
}

export default App
