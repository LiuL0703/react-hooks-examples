import React,{ useState, useEffect } from 'react';

export default function UseDebounceApp(){
  const [searchTerm, setSearchTerm] = useState('');

  const [results, setResults] = useState([]);

  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    ()=>{
      if(debouncedSearchTerm){
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then(hits =>{
          setIsSearching(false);
          console.log(hits);
          setResults(hits);
        })
      }else{
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );


  return (
    <div>
      <input 
        placeholder="Search Something"
        onChange={e => setSearchTerm(e.target.value)}
      />
      {isSearching && <div>Searching...</div>}
      {
        results.map((item)=> {
         return <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
          </li>
        })
      }
    </div>
  );
}

function searchCharacters(search){
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=${search}`,
    {
      method: 'GET'
    }
  )
    .then(r => r.json())
    .then(r => r.hits)
    .catch(error => {
      console.error(error);
      return [];
    })
}


function useDebounce(value, delay){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    ()=>{
      const handler = setTimeout(() =>
        setDebouncedValue(value)
      ,delay);

      return () => clearTimeout(handler);
    },
    [value, delay]
  )
  return debouncedValue;
}