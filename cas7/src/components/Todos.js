import React,{useState,useEffect} from 'react';
import { API_URL } from '../config/ApiConstants';

export const Todos = () => {
 
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        fetch(`${API_URL}/todos`)
            .then(res=>res.json())
            .then(data=>setTodos(data))
            .catch(err=>alert(err))
    },[])

    return(
        <div id="todos">
           {todos.length > 0 ? 
           
           <ul>{todos.map((todo)=>{
            return(
            <li key={todo.id}>
                <span>{todo.title}</span>
                <input
                    type='checkbox'
                    checked={todo.completed}
                />
            </li>)
           })}</ul>: 
           <h3>No Todos found</h3>}
        </div>
    )
}