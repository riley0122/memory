import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {[...Array(16)].map((_, i) => (
        <div key={i} className={"shadow-[0px_0px_5px_2px] shadow-slate-700 rounded-lg ease-linear duration-150 hover:shadow-[0px_0px_20px_10px] hover:shadow-slate-400 div" + (i + 1).toString()}></div>
      ))}
    </div>
  );
}

export default App;
