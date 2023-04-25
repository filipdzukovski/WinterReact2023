import React from 'react';
import PropTypes from 'prop-types';

export const Todos = ({todoList,markTodoAsDone}) => {
    
    return(
        <ol>
         {todoList.map((todo,i)=>{
            return(
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <input
                        type="checkbox"
                        value={todo.done}
                        checked={todo.done}
                        onChange={()=>{markTodoAsDone(todo)}}
                    />
                </li>
            )
         })}
        </ol>
    )
}

Todos.propTypes = {
    todoList: PropTypes.array.isRequired,
    markTodoAsDone:PropTypes.func.isRequired
}