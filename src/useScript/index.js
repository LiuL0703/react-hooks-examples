import React, { useState, useEffect } from 'react';

function useScriptApp(){
  const [loaded, error] = useScript(
    'https://pm28k14qlj.codesandbox.io/test-external-script.js'
  );

  /*eslint no-undef: */
  return (
    <div>
      <div>
        Script loaded: <b>{loaded.toString()}</b>
      </div>
      {
        loaded && !error && (
          <div>
            Script function call response : <b>{TEST_SCRIPT.start()}</b>
          </div>
        )
      }
    </div>
  );
}

let cachedScripts = [];

function useScript(src){
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(
    ()=>{
      if(cachedScripts.includes(src)) {
        setState({
          loaded: true,
          error: false
        });
      } else {
        cachedScripts.push(src);

        let script = document.createElement('script');
        script.src = src;
        script.async = true;

        const onScriptLoad = () => {
          setState({
            loaded: true,
            error: false
          });
        };
        
        const onScriptError = () => {
          const index = cachedScripts.indexOf(src);
          if(index >=0) cachedScripts.splice(index, 1);
          script.remove();

          setState({
            loaded: true,
            error: true
          })
        };

        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);

        document.body.appendChild(script);

        return ()=>{
          script.removeEventListener('load', onScriptLoad);
          script.removeEventListener('error', onScriptError);
        }
      }
    },
    [src]
  );


  return [state.loaded, state.error];

}

export default useScriptApp;