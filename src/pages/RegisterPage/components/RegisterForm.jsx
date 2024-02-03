// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!'); // Customize this alert as needed
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="flex">
      {/* Left side (registration form) */}
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-8">Register</h1>
        {/* Add your form fields here (e.g., username, profile image) */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-8 p-2 border rounded"
        />
        <button onClick={handleRegister} className="bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </div>

      {/* Right side (image and title) */}
      <div className="w-1/2 bg-cover" style={{ backgroundImage: `url('your-image-url')` }}>
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold mb-4">Your Title Here</h1>
          <p>Your description here.</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
