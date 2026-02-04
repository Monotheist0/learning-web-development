import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Sending data to the backend: ', formData);
    alert(`Registered: ${formData.username}`);
  };
  return (
    <div
      style={{
        border: '2px solid orange',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          ></input>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div
        style={{
          marginTop: '20px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '10px',
        }}
      >
        <p>
          <strong>Live State:</strong>
        </p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default RegisterForm;
