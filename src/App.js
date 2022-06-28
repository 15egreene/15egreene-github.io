import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/App.css';
import BibleStories from './views/BibleStories';
import Home from './views/Home.js';
import ReadBible from './views/ReadBible';
import SearchText from './views/SearchText';

function App() {
  return (
<React.Fragment>
  <Navbar/>
  <Routes>
    <Route children path='/' element={<Home />} />
    <Route children path='/read-bible/text-specific' element={<SearchText />} />
    <Route children path='/read-bible' element={<ReadBible />} />
    <Route children path='/bible-stories' element={<BibleStories/>}/>
  </Routes>
  </React.Fragment>
  );
}

export default App;
