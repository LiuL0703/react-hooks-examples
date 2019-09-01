import React, { useState, useEffect, useRef } from 'react';

export default function UseOnClickOutsideApp(){
  const ref = useRef();

  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, ()=> setModalOpen(false));

  return (
    <div>
      {
        isModalOpen ? (
          <div ref={ref}>
           👋 Hey, It's a modal. Click anywhere outside of it to close
          </div>
        ) : (
          <button onClick={()=> setModalOpen(true)}>
            Open Modal
          </button>
        )
      }
    </div>
  )
}

function useOnClickOutside(ref, handler){
  useEffect(
    ()=>{
      const listener = event => {
        if(!ref.current || ref.current.contains(event.target)){
          return;
        }
        handler(event);
      }
      document.addEventListener('mousedown',listener);
      document.addEventListener('touchstart', listener);
      return ()=>{
        document.removeEventListener('mousedown',listener);
        document.removeEventListener('touchstart',listener);
      };
    },
    [ref,handler]
  );
}