import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.scss';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const fixedUsername = 'admin';
    const fixedPassword = 'password123';
    if (username === fixedUsername && password === fixedPassword) {
      console.log('Logged in successfully');
      setError('');
      navigate('http://localhost:8080/admin');
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <div className={styles.loginContainer}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
