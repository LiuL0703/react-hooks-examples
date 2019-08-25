import React,{ useRef, useState, useEffect} from 'react';

export default function UseHoverApp(){
    const [hoverRef, isHovered] = useHover();

    return (
      <div ref={hoverRef}>
        {isHovered ? '😬': '😞'}
      </div>
    );
}

function useHover(){
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = ()=>setValue(true);
  const handleMouseOut = ()=> setValue(false);

  useEffect(
    ()=>{
      const node = ref.current;

      if(node){
        node.addEventListener('mouseover', handleMouseOver, false);
        node.addEventListener('mouseout', handleMouseOut,false);

        return ()=>{
          node.removeEventListener('mouseover',handleMouseOver,false);
          node.removeEventListener('mouseout',handleMouseOut,false);
        }
      }
    }
  );

  return [ref, value];
}