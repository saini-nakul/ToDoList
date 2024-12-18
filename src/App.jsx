import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTodo = (e) => {

    e.preventDefault();

    if(input.trim() === "") return;

    if(editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? input : todo
      );

      setTodos(updatedTodos)
      setEditIndex(null)
    }
    else {
      setTodos([...todos, input]);
    }

    setInput('');

  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <>
      <div className="app">

        <div className="app-title">
          <h1>To-Do List</h1>
          <hr></hr>
        </div>

        <form className='todo-form' onSubmit={addOrUpdateTodo}>
          <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}      
          className="todo-input"
          placeholder="Start typing a task..." />
          <button type="submit" className="todo-button">
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </form>

        <div className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem 
              key={index} 
              todo={todo} 
              editTodo={() => editTodo(index)} 
              removeTodo={() => removeTodo(index)} 
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default App
