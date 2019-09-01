import React, { useState, useEffect, useRef } from 'react';

export default function UsePreviousApp(){
  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);

  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={()=> setCount(count + 1)} >Increment</button>
    </div>
  )
}

function usePrevious(value){
  const ref = useRef();

  useEffect(()=>{
    ref.current = value;
  },[value]);

  return ref.current;
}