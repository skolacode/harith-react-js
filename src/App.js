import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('');

  return (
    <div className="App">
      <p style={{ fontSize: 30, color: 'lightgrey', fontWeight: 500 }} >Welcome {firstName}</p>
      <p>
        to React JS class
        <img src={logo} className='App-logo' alt='React JS Logo'/>  
      </p>
      <p className='Skola-code-text'>By SkolaCode</p>

      <input type="text" onChange={(evt) => setFirstName(evt.target.value) }
      />
    </div>
  );
}

export default App;
