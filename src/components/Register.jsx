import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const user = { name, email };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', 'mockToken123');
    onLogin();
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      />
      <button onClick={handleRegister} style={{ padding: '10px 20px' }}>
        Register
      </button>
    </div>
  );
};

export default Register;
