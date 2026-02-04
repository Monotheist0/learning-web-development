import { useState } from 'react';
import type { ChangeEvent } from 'react';

function ProfileEditor() {
  const [name, setName] = useState('Guest');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setName(text);
  };

  return (
    <div style={{ border: '1px solid cyan', padding: '20px', margin: '10px' }}>
      <h2>User Profile</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
    </div>
  );
}
export default ProfileEditor;
