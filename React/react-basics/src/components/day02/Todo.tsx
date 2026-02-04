import { useState } from 'react';
import type { ChangeEvent } from 'react';

function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleAdd = () => {
    if (inputValue === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };
  return (
    <div
      style={{ border: '2px solid purple', padding: '20px', margin: '20px' }}
    >
      <h2>My Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="New Task..."
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
