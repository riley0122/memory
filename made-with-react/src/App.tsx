import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {[...Array(16)].map((_, i) => (
        <div key={i} className={"div" + (i + 1).toString()}></div>
      ))}
    </div>
  );
}

export default App;
