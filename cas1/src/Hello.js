import React from 'react';

export const Hello = ({ firstName, age, nesto, greeting,secondCondition }) => {
    console.log(nesto)
    return (
        <div className='hello-class'>
            {secondCondition === true && <h1>Welcome</h1>}
            <p>Greetings from my first App {firstName} </p>
            <p>Age: {age}</p>
            <h2>Nesto: {nesto}</h2>
            {greeting === true ?
                <p>Greeting: My fancy Greeting</p> :
                <h3>This is not the greeting you're looking for</h3>} 
            
        </div>
    )
}

// uslov ? ako e tocno : ako e netocno