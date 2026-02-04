import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleSubtraction = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ border: '2px solid red', padding: '20px', margin: '20px' }}>
      <h2>Day 2: State Management</h2>
      <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Score: {count}</p>
      <button onClick={handleIncrement}>Add +1</button>
      <button onClick={handleSubtraction}>Sub -1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default Counter;
