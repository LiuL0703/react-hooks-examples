import React, { useState, useEffect, useRef } from 'react';

export default function useOnScreenApp(){
  const ref = useRef();

  const onScreen = useOnScreen(ref, '-300px');

  return (
    <div>
      <div style={{height: '100vh'}}>
        <h1>Scroll down to next section 👇</h1>
      </div> 
      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: onScreen ? '#23cebd':'#efefef'
        }}
      >
      {
        onScreen ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section 👇</h1>
        )
      }
      </div>
    </div>
  );
}

function useOnScreen(ref, rootMargin = '0px'){
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('entry-->',entry);
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );

    if (ref.current){
      observer.observe(ref.current);
    }

    return ()=> {
      observer.unobserve(ref.current);
    }
  },[]);

  return isIntersecting;
}