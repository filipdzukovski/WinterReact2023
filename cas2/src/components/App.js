import React from 'react';
import {Hotel} from './Hotel';
import { Headline } from './Headline';
import {FruitList} from './FruitList';
import {Comments} from './Comments';

export function App(){

    const header = {
        title: "New Header",
        content:"This is some big story...",
        author:"Filip"
    }
    const ovosje = ["banana","jabolko","krusha"];

    const commentRating = [
        {stars:1},
        {stars:3},
        {stars:5}

    ]

    const komentari = [
        {id:1,author:"Filip",content:"This is my first Comment",date:"11/04/2023",starRating:commentRating[0]},
        {id:2,author:"Elena",content:"Second Comment on the way",date:"10/10/2022",starRating:commentRating[1]},
        {id:3,author:"Igor",content:"Third Comment coming...",date:"05/05/2021",starRating:commentRating[2]}
    ]

    return(
        <div id="app">
            <h2>App</h2>
            <Hotel capacity={255} availability={true} reservations={254} />
            <hr/>
            <Headline naslov={header} />
            <hr/>
            <FruitList listaNaOvosje={ovosje}/>
            <hr/>
            <Comments listOfComments={komentari} randomNumber={5}/>
        </div>
    )
}