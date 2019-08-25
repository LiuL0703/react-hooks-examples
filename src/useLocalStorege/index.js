import { useState } from 'react';
import React from 'react';

export default function UseLocalStorageApp(){
  const [name, setName] = useLocalStorage('name','bob');
  return (
    <div>
      <input 
        type="text"
        placeholder="Your name"
        value={name}
        onChange={e=> setName(e.target.value)}
      />
    </div>
  );
}

function useLocalStorage(key, initialValue){
  const [storedValue, setStoredValue] = useState(()=>{
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch(err){
      console.log(err);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err){
      console.log(err);
    }
  }

  return [storedValue, setValue];
}

