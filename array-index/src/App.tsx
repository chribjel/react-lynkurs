import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 'todo1', text: 'Learn React' },
    { id: 'todo2', text: 'Build a project' },
  ]);

  const addTodo = () => {
    setTodos(prevTodos => [...prevTodos, { id: 'todo' + (prevTodos.length + 1), text: 'New Todo' }]);
  };

  const removeTodo = (index) => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const reorderTodos = () => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos];
      [newTodos[0], newTodos[1]] = [newTodos[1], newTodos[0]]; // Swap first two items
      return newTodos;
    });
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          // This is the problematic part. Using 'index' as key:
          <li key={index}>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={reorderTodos}>Reorder Todos</button>
    </div>
  );
}

export default App
