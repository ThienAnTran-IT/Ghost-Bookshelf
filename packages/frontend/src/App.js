import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
