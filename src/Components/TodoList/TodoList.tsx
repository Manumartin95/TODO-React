import React from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";

interface Props{
    todos: Todo[]
    toggleTodo: ToggleTodo
    deleteTodoItem: deleteTodoItem
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo, deleteTodoItem}) => {
    return (
        <ul>
            {todos.map((todo) => {
                    return <TodoListItem key={todo.task} todo={todo} toggleTodo={toggleTodo} deleteTodoItem={deleteTodoItem}/>;
                })}
        </ul>
    )
}