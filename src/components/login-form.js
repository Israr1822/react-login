import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginForm({ handleLogin, loggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
