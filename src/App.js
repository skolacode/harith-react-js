import React, { useState } from 'react'
import './App.css';
import { Title, SubTitle, Input } from './styles/AppStyle';

function App() {

  const [firstName, setFirstName] = useState('');

  return (
    <div className="App">
      <Title>
        Welcome {firstName}
      </Title>
      <SubTitle>
        to React JS class
      </SubTitle>
      <SubTitle >By SkolaCode</SubTitle>

      <Input 
        type="text" 
        onChange={(evt) => setFirstName(evt.target.value) }
      />
    </div>
  );
}

export default App;
