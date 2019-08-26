import React,{ useState, useMemo } from 'react';

export default function UseMemoApp(){
  const [count , setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ['hey','this','is','very','cool'];
  const word = words[wordIndex];

  // make it slow
  const computedLetterCount = word => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  }

  const letterCount = useMemo(()=> computedLetterCount(word),[word]);


  return (
    <div>
      <h3>Slow version</h3>
      <p>"{word}" has {letterCount} letters</p>
      <button
        onClick={()=>{
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      > 
      Next word
      </button>
      <h3>fast version ⚡️</h3>
      <p>Counter : {count}</p>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Increment</button>
    </div>
  )
}