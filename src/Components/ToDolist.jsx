import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">To-Do List</h1>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text" 
              className="form-control"
              value={inputValue}
              onChange={handleChange}
              onKeyPress={handleKeyPress} 
              placeholder="Enter a new task"
            />
            <button className="btn btn-primary" type="button" onClick={handleAddTodo}>Add</button>
          </div>
          <div className="card">
            <ul className="list-group list-group-flush">
              {todos.map((todo, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {todo}
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTodo(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
