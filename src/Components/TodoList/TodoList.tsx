import React from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";

interface Props{
    todos: Todo[]
    toggleTodo: ToggleTodo
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <ul>
            {todos.map((todo) => {
                    return <TodoListItem key={todo.task} todo={todo} toggleTodo={toggleTodo} />;
                })}
        </ul>
    )
}