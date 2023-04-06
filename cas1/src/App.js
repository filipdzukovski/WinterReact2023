import React from 'react';
import {Hello} from './Hello';

export function App(){

  return(
    <div id="app">
      <Hello firstName="Angela" age={25} nesto="Nesto 1" secondCondition={false}/>
      <h1>Hi Filip 1 2 3 !!!</h1>
      <p>{5+3}</p>
      <Hello firstName="Igor" age={18} greeting = {true}  secondCondition={true}/>
    </div>
  )
}