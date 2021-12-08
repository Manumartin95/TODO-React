import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { TodoList } from './components/TodoList/TodoList';

const initialTodos: Todo[] = [
  {
    task: 'Task 1',
    complete: false
  },
  {
    task: 'Task 2',
    complete: false
  },
  {
    task: 'Task 3',
    complete: true
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (task: string) =>{
    const newTodo: Todo = {task: task, complete: false};
    setTodos([...todos, newTodo]);
  }

  const deleteTodoItem = (task: string) =>{
    const newTodos = todos.filter(todo => todo.task !== task);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <h1>Lista de tareas</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodoItem={deleteTodoItem}/>
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
  );
}

export default App;
