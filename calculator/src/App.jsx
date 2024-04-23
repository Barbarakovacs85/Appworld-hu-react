import React, { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import './App.css';

function App() {
  const [total, setTotal] = useState('');

  const handleClick = (e) => {
    setTotal(total.concat(e.target.name));
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
        <form>
          <Display total={total} />
        </form>

        <Buttons clear={clear} handleDelete={handleDelete} handleClick={handleClick} calculate={calculate} />
      </div>
    </div>
  )
}

export default App;