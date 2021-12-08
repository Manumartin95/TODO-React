interface Todo {
    task: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type addTodo = (task: string) => void;
type deleteTodoItem = (task: string) => void;
