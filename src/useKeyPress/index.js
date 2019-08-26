import React,{ useState, useEffect } from 'react';

export default function UseKeyPressApp(){
  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');
  const robotPress = useKeyPress('r');
  const foxPress = useKeyPress('f');

  return (
    <div>
      <div>happy,sad,robot,fox</div>
      <div>
        {happyPress && '😊'}
        {sadPress && '😢'}
        {robotPress && '🤖'}
        {foxPress && '🦊'}
      </div>
    </div>
  )
}

// bug
function useKeyPress(targetKey){
  const [keyPressd, setKeyPressed] = useState(false);

  useEffect(()=>{
    function downHandler({key}){
      if (key === targetKey){
        setKeyPressed(true);
      }
    }
  
    const upHandler = ({key})=>{
      if(key === targetKey){
        setKeyPressed(false);
      }
    }

    window.addEventListener('keydown',downHandler);
    window.addEventListener('keyup',upHandler);
    return ()=>{
      window.removeEventListener('keydown',downHandler);
      window.removeEventListener('keyup',upHandler);
    }
  },[targetKey]);

  return keyPressd;
}