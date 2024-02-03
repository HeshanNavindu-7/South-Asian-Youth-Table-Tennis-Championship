import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { push, ref as dbRef } from 'firebase/database';
import { auth, database } from '../../../firebase';
import Modal from 'react-modal';
import './RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleRegister = async () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setUsernameError('');

    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Invalid email address.');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    if (username.trim() === '') {
      setUsernameError('Username is required.');
      return;
    }

    try {
      // Upload profile image to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `profile_images/${email}`);
      await uploadBytes(storageRef, profileImage);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user registration data in Realtime Database
      const userRef = dbRef(database, `users/${user.uid}`);
      await push(userRef, {
        username: username,
        email: email,
        profileImage: imageUrl,
        // Add other data you want to store
      });

      setIsModalOpen(true);
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
      console.error('Registration failed:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left side (registration form) */}
      <div className="w-full lg:w-1/2 p-4 bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Register</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`mb-4 p-3 border rounded w-full focus:outline-none ${
              usernameError ? 'border-red-500' : ''
            }`}
          />
          {usernameError && <p className="text-red-500 text-sm mb-4">{usernameError}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mb-4 p-3 border rounded w-full focus:outline-none ${
              emailError ? 'border-red-500' : ''
            }`}
          />
          {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mb-4 p-3 border rounded w-full focus:outline-none ${
              passwordError ? 'border-red-500' : ''
            }`}
          />
          {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`mb-4 p-3 border rounded w-full focus:outline-none ${
              confirmPasswordError ? 'border-red-500' : ''
            }`}
          />
          {confirmPasswordError && (
            <p className="text-red-500 text-sm mb-4">{confirmPasswordError}</p>
          )}
          <label className="block mb-4">
            Profile Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full p-2 border rounded focus:outline-none"
            />
          </label>
          <button
            onClick={handleRegister}
            className="bg-red-500 text-white p-3 rounded w-full hover:bg-black focus:outline-none"
          >
            Register
          </button>
        </div>
      </div>

      {/* Right side (image and title) */}
      <div className="w-full lg:w-1/2 bg-cover bg-center h-1/3 lg:h-screen" style={{ backgroundImage: 'url("https://ca-times.brightspotcdn.com/dims4/default/28ff1a8/2147483647/strip/true/crop/8640x5760+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fae%2F1a%2F1eda09baf3d95f8819a5be5b4349%2F2c43e1d7a4ea4ecb8280c74d610aca0d")' }}>
        <div className="flex flex-col items-center justify-center h-full text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Your Title Here</h1>
          <p>Your description here.</p>
        </div>
      </div>

      {/* Modal for success message */}
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Registration Successful"
  className="modal"
  overlayClassName="overlay"
>
  <div className="flex justify-end">
    <button onClick={closeModal} className="text-2xl text-gray-500 hover:text-gray-700 focus:outline-none">&times;</button>
  </div>
  <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
  <p>Your additional success message goes here.</p>
</Modal>
    </div>
  );
};

export default RegisterForm;
