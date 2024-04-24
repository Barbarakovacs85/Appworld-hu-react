import React, { useState } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  const [total, setTotal] = useState('');
  const [lastButtonIsEqual, setlastButtonIsEqual] = useState(false);
  const handleClick = (e) => {
   setTotal(
      lastButtonIsEqual === true && !isNaN(parseInt(e.target.name)) 
      ? (e.target.name): total.concat(e.target.name));
      setlastButtonIsEqual(false)
  }
  const clear = () => {setTotal("");}
  function handleDelete() {setTotal(total.slice(0,-1));}

  const calculate = () => {
    try {
      setTotal(eval(total).toString());
    } catch {
      setTotal("Error");
    }
    setlastButtonIsEqual(true)
  }

  return (
    <div className="App">
      <h1>Számológép</h1>
      <div className="container">
        <Display total={total} />
        <Buttons clear={clear} handleDelete={handleDelete} handleClick={handleClick} calculate={calculate} />
      </div>
    </div>
  )
}

export default App;