import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { useState } from "react";

type Todo = {
  id: number;
  description: string;
  checked: boolean;
};

export function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([

      ]);
    const addTodo = (description: string) => {
        const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

        const newTodo: Todo = {
          id: newId,
          description: description,
          checked: false,
          
        };
    setTodos([...todos, newTodo]);
    };
    const removeTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id); 
        setTodos(updatedTodos);
      };
    const toggleChecked = (id: number) => {
        const updatedTodos = todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        );
        setTodos(updatedTodos);
      };
      
  return (
    <>
      <div className="flex">
        <AddTodo onAddTodo={addTodo} />
      </div>

      <div className="my-5 flex-column gap-5 w-full text-left">
    
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            checked={todo.checked}
            onRemove={removeTodo}
            onToggleChecked={toggleChecked}
          />
        ))}
      </div>
    </>
  );
}