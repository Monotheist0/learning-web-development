import { useState } from 'react';
import type { ChangeEvent } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('Guest');
  const [agreed, setAgreed] = useState(false);
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAgreed(event.target.checked);
  };
  const handleSubmit = () => {
    alert(`Welcome, ${username}! Account has been successfully created.`);
  };
  return (
    <div style={{ border: '2px solid green', padding: '20px', margin: '20px' }}>
      <h2>Sign Up</h2>
      <div>
        <label>Name: </label>
        <input type="text" onChange={handleNameChange} value={username} />
      </div>
      <div style={{ margin: '10px 0' }}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={handleCheckboxChange}
          id="terms"
        />
      </div>
      <div>
        <button disabled={!agreed} onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}
export default SignupForm;
