import React, { useState, useEffect } from 'react';
import { Todos } from './Todos';

export function App() {

    const [car, setCar] = useState({ model: "Yugo", year: 1991 });
    const [days, setDays] = useState([
        "Monday", "Tuesday", "Wednesday"
    ]);
    const [person, setPerson] = useState({ firstName: "", lastName: "" })
    const [todos, setTodos] = useState([
        { id: 0, text: "Learn React", done: false },
        { id: 1, text: "Eat Dinner", done: false },
        { id: 2, text: "Go to Sleep", done: false }
    ]);
    const [newTodo, setNewTodo] = useState("");


    useEffect(() => {
        console.log(todos)
    }, [todos])

    function buyNewCar() {
        setCar({
            // model: "Audi",
            ...car,
            year: 1999
        })
    }

    function addDays() {
        setDays([
            "Sunday", ...days, "Thursday"
        ])
    }

    function addTodo() {
        if (newTodo.trim() !== "") {

            let objekt = {
                id: Math.floor(Math.random()*1000000),
                text: newTodo,
                done: false
            }
            setTodos([...todos, objekt]);
            setNewTodo("");
        }
        else {
            alert("Enter some value")
        }
    }
    function markTodoAsDone(todo) {
        setTodos([
            ...todos.map(item => (item.id === todo.id) ?
                { id: item.id, text: item.text, done: !item.done }//koga ke go najde elementot
                :
                item //za site ostanati

            )
        ])
    }

    return (
        <div id="app">
            <h2>Car:</h2>
            <p>Model: {car.model} </p>
            <p>Year: {car.year} </p>
            <button onClick={buyNewCar}>Buy new Car</button>
            <hr />
            <h3>Days:</h3>
            <ul>
                {days.map((day, i) => (
                    <li key={i}>{day}</li>
                ))}
            </ul>
            <button onClick={addDays}>Add Days</button>
            <hr />
            <input
                type="text"
                placeholder='Enter First Name'
                value={person.firstName}
                onChange={(e) => { setPerson({ ...person, firstName: e.target.value }) }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder='Enter Last Name'
                value={person.lastName}
                onChange={(e) => { setPerson({ ...person, lastName: e.target.value }) }}
            />
            <br />
            <br />
            <hr />
            <input
                type={"text"}
                placeholder="Enter Todo"
                value={newTodo}
                onChange={(e) => { setNewTodo(e.target.value) }}
            />
            <button onClick={addTodo}>Add Todo</button>
            <Todos todoList={todos} markTodoAsDone={markTodoAsDone} />
        </div>
    )
}