import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/login-form';
import Dashboard from './components/dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'israr' && password === '123') {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginForm
              handleLogin={handleLogin}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            loggedIn ? (
              <Dashboard handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


