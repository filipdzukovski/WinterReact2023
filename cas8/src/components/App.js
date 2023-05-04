import React from 'react';
// import Hello from './Hello';
import {HelloFunc} from './HelloFunc';
import {Cake} from './Cake';

export function App(){

    return(
        <div id="app">
            <h1>App</h1>
            {/* <Hello/> */}
            <HelloFunc/>
            <Cake/>
        </div>
    )
}