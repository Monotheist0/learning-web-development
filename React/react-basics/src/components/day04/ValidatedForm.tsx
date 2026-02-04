import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

function ValidatedForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;
    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email address (must include @)';
      isValid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Success! Form Submitted.');
      console.log(formData);
    } else {
      console.log('Validation Failed');
    }
  };

  return (
    <div
      style={{
        border: '2px solid red',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
      }}
    >
      <h2>Login (With Validation)</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? 'red' : 'initial' }}
          />
          {errors.email && (
            <span style={{ color: 'red', display: 'block', fontSize: '12px' }}>
              {errors.email}
            </span>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ borderColor: errors.password ? 'red' : 'initial' }}
          />
          {errors.password && (
            <span style={{ color: 'red', display: 'block', fontSize: '12px' }}>
              {errors.password}
            </span>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default ValidatedForm;
