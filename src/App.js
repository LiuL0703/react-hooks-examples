import React from 'react';
import './App.css';
import UseLocalStorage from './useLocalStorege';
import UseHover from './useHover';
import UseWindowSize from './useWindowSize';

function App() {
  return (
    <div className="App">
        <header>
          <h1>Custom Hooks</h1>
        </header>
        <h2>Use LocalStorage</h2>
        <UseLocalStorage />
        <h2>Use Hover</h2>
        <UseHover />
        <h2>Use WindowSize</h2>
        <UseWindowSize/>
    </div>
  );
}

export default App;
