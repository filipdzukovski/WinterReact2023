import React,{useState,useEffect} from 'react';
// import {MovieList} from './MovieList';
// import {ClassComponent} from './ClassComponent';

export function App(){
        const [promenliva1,setPromenliva1] = useState("Vrednost 1");
        const [username,setUsername] = useState("");
        const [password,setPassword] = useState("");
        const [counter,setCounter] = useState(0);
        const [brojac,setBrojac] = useState(0) //pocetna vrednost na brojacot trgnuva od 0;
    // const list = [
    //     {name:"Back to the Future",date:1985,genre:"Comedy,Sci-fi", plot:"Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",imdbLink:"https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_back%2520to",imgUrl:"https://resizing.flixster.com/JiFLlD2M0XSab90iE1QVsT9JHHc=/300x300/v2/https://flxt.tmsimg.com/assets/p8717_v_h9_ag.jpg"},
    //     {name:"The Dark Knight",date:2008,genre:"Action,Crime", plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",imdbLink:"https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520dark",imgUrl:"https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg"},
    //     {name:"Terminator 2:Judgement Day",date:1991,genre:"Action,Sci-fi", plot:"A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her 10-year old son John from an even more advanced and powerful cyborg.",imdbLink:"https://www.imdb.com/title/tt0103064/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_terminato",imgUrl:"https://metro.co.uk/wp-content/uploads/2017/08/robert-patrick.jpg?quality=90&strip=all"}
    // ]

    useEffect(()=>{
        console.log("Did Update");
    },[promenliva1]);


    function smeniVrednost(){
        setPromenliva1("Nova Vrednost 1")
    }

    function prikaziVrednosti(){
        // alert("Values:\nUsername: " +username+ "\nPassword: " +password );
        alert(`Values:\nUsername: ${username}\nPassword:${password}`)
    }

    // function handleChange(event){
    //     setUsername(event.target.value)
    // }

    return(
        <div id="app">
            {/* <MovieList listOfMovies={list} /> */}
            {/* <ClassComponent/> */}
            <h3>{promenliva1}</h3>
            <button onClick={smeniVrednost}>Change !!!</button>
            <hr/>
            <input
                type="text"
                placeholder='Enter Username'
                value={username}
                onChange={(event)=>{setUsername(event.target.value)}}
            />
            <p>{username}</p>
            <input
                type="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
            />
            <p>{password}</p>
            <hr/>
            <br/>
            <br/>
            <button onClick={prikaziVrednosti}>Show Values</button>
            <h3>Counter:{counter}</h3>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" 
            alt="slika.png"
            onClick={()=>{setCounter(counter + 1)}}
            />
            <p>Brojac: {brojac} </p> {/* prikaz na brojacot  */}
            <div onClick={()=>{setBrojac(brojac + 1 )}} id="counter-example"> {/* Zgolemuvanje na brojacot za +1 od tekovnata sostojba(brojac)  */}
                <p>Area for clicking</p>
            </div>
        </div>
    )
}