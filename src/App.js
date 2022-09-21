import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Work from './pages/Work/Work.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="work" element={ <Work /> } />
      </Routes>
    </div>
  );
}

export default App;
