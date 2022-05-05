import React, {useState, useEffect } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {

    const [inputText, setInputText] = useState('');
    
  return (
    <main>
      <input type="text" className="input" placeholder="Search..." onChange={e => {setInputText(e.target.value)}}></input>
      {JSONDATA.filter(val => {
        if (inputText === ''){
          return val;
        } else if(val.first_name.toLowerCase().includes(inputText.toLowerCase())){
          return val;
        }
      
      }).map(val => {
        return <div className="list-array" key={val.id}><p>{val.first_name}</p></div>
      })}
    </main>
  );
}

export default App;