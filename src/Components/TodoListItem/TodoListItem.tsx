import React from "react";

interface Props{
    todo: Todo
    toggleTodo: ToggleTodo
    deleteTodoItem: deleteTodoItem
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo, deleteTodoItem}) => {


    return (
    <li>
        <input type="checkbox" 
        checked={todo.complete} 
        onClick={() => toggleTodo(todo)}/>        
        
        <span style={{margin: '1rem', textDecoration: todo.complete ? 'line-through': ''}}>{todo.task}</span>
        
        {todo.complete === true && 
        <button
        onClick={() => deleteTodoItem(todo.task)}>
            ❌
        </button>
        }
        
    </li>
    )
}