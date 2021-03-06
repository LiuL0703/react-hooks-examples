import React from 'react';
import './App.css';
import UseLocalStorage from './useLocalStorege';
import UseHover from './useHover';
import UseWindowSize from './useWindowSize';
import UseKeyPress from './useKeyPress';
import UseMemo from './useMemo';
import UseDebounce from './useDebounce';
import UseOnScreen from './useOnScreen';
import UsePrevious from './usePrevious';
import UseOnClickOutside from './useOnClickOutside';
import UseAnimation from './useAnimation';
import UseScript from './useScript';

function App() {
  return (
    <div className="App">
        <header>
          <h1>Custom Hooks</h1>
        </header>
        <h2>Use Animation</h2>
        <UseAnimation />
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
        <h2>Use Previous</h2>
        <UsePrevious />
        <h2>Use OnClick OutSide</h2>
        <UseOnClickOutside />
        <h2>UseOnScreen</h2>
        <br />
        <UseOnScreen />
        <h2></h2>
        <br />
        <UseScript />
        <br />
        <br />
    </div>
  );
}

export default App;
