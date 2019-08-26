import React from 'react';
import './App.css';
import UseLocalStorage from './useLocalStorege';
import UseHover from './useHover';
import UseWindowSize from './useWindowSize';
import UseKeyPress from './useKeyPress';
import UseMemo from './useMemo';
import UseDebounce from './useDebounce';

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
        <h2>Use KeyPress</h2>
        <UseKeyPress />
        <h2>Use Memo</h2>
        <UseMemo />
        <h2>Use Debounce</h2>
        <UseDebounce />
    </div>
  );
}

export default App;
