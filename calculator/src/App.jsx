import React, { useState } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  const [total, setTotal] = useState('');
  const [lastButton, setlastButton] = useState('0');

  const handleClick = (e) => {
    setlastButton(e.target.name);
    
    setTotal(lastButton == null ? 0: total.concat(e.target.name));
  }
  const clear = () => {
    setTotal("");
  }

  function handleDelete() {
    setTotal(total.slice(0,-1));
  }

  const calculate = () => {
    try {
      setTotal(eval(total).toString());
    } catch {
      setTotal("Error");
    }
  }

  return (
    <div className="App">
      <h1>Számológép</h1>

      <div className="container">
        {lastButton}
        <Display total={total} />
        <Buttons clear={clear} handleDelete={handleDelete} handleClick={handleClick} calculate={calculate} />
      </div>
    </div>
  )
}

export default App;