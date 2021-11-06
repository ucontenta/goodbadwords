import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Result from './Result';

function App() {

  let [word, setWord] = useState<string>()
  return (
    <div className="App">
      <header>
        <img src="logo.png" alt="xxx"></img>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/result" element={<Result word={word}></Result>}></Route>
          <Route path="/" element={<Home checkWord={(wordFromHome) => setWord(wordFromHome)}></Home>}>
          </Route>
        </Routes>      
      </BrowserRouter>
      <footer>
        Made with Love
      </footer>
    </div>
  );
}

export default App;
