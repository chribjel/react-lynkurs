import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);

  // Bad practice: Managing completed todos count separately
  const [completedTodosCount, setCompletedTodosCount] = useState(0);

  const toggleTodo = (id: number) => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      // This manual count update is error-prone
      setCompletedTodosCount(updatedTodos.filter(t => t.completed).length);
      return updatedTodos;
    });
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.text}
          </li>
        ))}
      </ul>
      <p>Completed Todos: {completedTodosCount}</p>
    </div>
  );
}

export default App
