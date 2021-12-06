import React from "react";

interface Props{
    todo: Todo
    toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
    return (
    <li>
        <input type="checkbox" 
        checked={todo.complete} 
        onClick={() => toggleTodo(todo)}/>        
        {' '}
        Task: {todo.task}
    </li>
    )
}