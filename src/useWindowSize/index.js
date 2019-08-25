import React, {useState, useEffect} from 'react';

export default function UseWindowSizeApp(){
  const size = useWindowSize();
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}

function useWindowSize(){
  const isClient = typeof window === 'object';

  function getSize(){
    return {
      width: isClient ? window.innerWidth : 'No!',
      height: isClient ? window.innerHeight : 'No!'
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(()=>{
    if(!isClient){
      return false;
    }

    function handleResize(){
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return ()=> window.removeEventListener('resize', handleResize);
  },[])

  return windowSize;
}