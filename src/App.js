import React, { useState } from 'react'
import './App.css';
import { Title, SubTitle, Input, InputBody, Description } from './styles/AppStyle';

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
      <InputBody>
        <Input 
          type="text" 
          onChange={(evt) => setFirstName(evt.target.value) }
        />
      </InputBody>
      <Description >I learn something new today</Description>
    </div>
  );
}

export default App;
