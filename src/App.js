import React from 'react';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="home-title">Orphedy</h1>
        <p className="home-caption">study with the one and only: Orpheus</p>
        <Button variant="primary" to="/home">let's study</Button>
      </header>
    </div>
  );
}

export default App;
