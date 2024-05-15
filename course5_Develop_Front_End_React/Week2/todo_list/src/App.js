import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);

  // Handle todo submission
  function handleSubmit(e) {
    e.preventDefault();

    let todo = document.getElementById('todoAdd').value;
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };

    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
    } else {
      alert("Enter valid task!")
    }

    document.getElementById('todoAdd').value = "";
  }

  // Handle delete todo
  function deleteTodo(id) {
    let updatedTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  }

  // Handle check completed todo
  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  // Handle Todo editing
  function submitEdits(newTodo) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === newTodo.id) {
        todo.text = document.getElementById(newTodo.id).value;
      }
      return todo;
    })
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if(loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    if(todos.length > 0) {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }
  }, [todos])

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' id='todoAdd' />
        {/* button for submit todo */}
        <button type='submit'>Add Todo</button>
      </form>

      {todos.map((todo) =>
        <div className='todo' key={todo.id}>
          <div className='todo-text'>
            {/* checkbox for completed todo */}
            <input type='checkbox' id='completed' checked={todo.completed} onChange={() => toggleComplete(todo.id)} />

            {todo.id === todoEditing ?
              (<input type='text' id={todo.id} defaultValue={todo.text} />
              ) :
              (<div>{todo.text}</div>)
            }
          </div>

          {/* create new div for buttons placement */}
          <div className='todo-actions'>
            {todo.id === todoEditing ?
              (
                <button onClick={() => submitEdits(todo)}>Submit edits</button>
              ): 
              (
                <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
              )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
