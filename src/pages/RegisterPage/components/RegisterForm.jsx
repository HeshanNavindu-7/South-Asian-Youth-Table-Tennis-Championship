import { ref as dbRef, set } from 'firebase/database';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { database } from '../../../firebase';
import './RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [Prefername, setPrefername] = useState('');
  const [email, setEmail] = useState('');
  const [team, setTeam] = useState('');
  const [Country, setCountry] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');
  const [teamError, setTeamError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [CountryError, setCountryError] = useState('');
  const [PrefernameError, setPrefernameError] = useState('');
  const [nicNumberError, setNicNumberError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = async () => {
    setEmailError('');
    setUsernameError('');
    setNicNumberError('');
    setPrefernameError('');
    setBirthdayError('');
    setTeamError('');
    setCountryError('');
    setIsLoading(true);

    if (username.trim() === '') {
      setUsernameError('Username is required.');
      setIsLoading(false);
      return;
    }
    if (Prefername.trim() === '') {
      setPrefernameError('Prefername is required.');
      setIsLoading(false);
      return;
    }


    if (!validateEmail(email)) {
      setEmailError('Invalid email address.');
      setIsLoading(false);
      return;
    }
    if (nicNumber.trim() === '') {
      setNicNumberError('NIC is required.');
      setIsLoading(false);
      return;
    }
    if (birthday.trim() === '') {
      setBirthdayError('Birthday is required.');
      setIsLoading(false);
      return;
    }
    if (team.trim() === '') {
      setTeamError('this is required.');
      setIsLoading(false);
      return;
    }
    if (Country.trim() === '') {
      setCountryError('this is required.');
      setIsLoading(false);
      return;
    }

    try {
      // Upload profile image to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `profile_image/${nicNumber}`);
      await uploadBytes(storageRef, profileImage);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      // Store user registration data in Realtime Database without creating a user
      const userRef = dbRef(database, `users/${nicNumber}`); // Or use any other unique identifier
      await set(userRef, {
        username: username,
        Prefername: Prefername,
        email: email,
        nicNumber: nicNumber,
        birthday: birthday,
        team: team,
        Country: Country,
        profileImage: imageUrl,
        // Add other data you want to store
      });

      setIsModalOpen(true);
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-full justify-center items-center mt-12 reg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Register</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input
              disabled
              type="text"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`mb-4 p-3 border rounded w-full focus:outline-none ${usernameError ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {usernameError && <p className="text-red-500 text-xs">{usernameError}</p>}


            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              disabled
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mb-4 p-3 border rounded w-full focus:outline-none ${emailError ? 'border-red-500' : 'border-gray-300'
                }`}
            />

            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}



            <label className="block text-gray-700 text-sm font-bold mb-2">Birthday</label>
            <input
              disabled
              type="date"
              placeholder="Enter your birthday"
              value={birthday}

              onChange={(e) => setBirthday(e.target.value)}
              className={`mb-4 p-3 border rounded w-full focus:outline-none ${birthdayError ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {birthdayError && <p className="text-red-500 text-xs">{birthdayError}</p>}
            <label className="block text-gray-700 text-sm font-bold mb-2">Select Country</label>
            <select
              disabled
              value={Country}
              onChange={(e) => setCountry(e.target.value)}
              className={`mb-4 p-3 border rounded w-full focus:outline-none ${CountryError ? 'border-red-500' : 'border-gray-300'
                }`}
            >
              <option value="">Select country</option>
              <option value=" Bangladesh"> Bangladesh</option>
              <option value="Bhutan"> Bhutan</option>

              <option value="Pakistan">Pakistan</option>
              <option value="india"> India</option>
              <option value="Sri lanka">Sri Lanka</option>
              <option value="Nepal">Nepal</option>
              <option value="Maldives"> Maldives</option>

              {/* Add more countries as needed */}
            </select>
            {CountryError && <p className="text-red-500 text-xs">{CountryError}</p>}

          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Preferred Name</label>
            <input
              disabled
              type="text"
              placeholder="Enter your preferred name"
              value={Prefername}
              onChange={(e) => setPrefername(e.target.value)}
              className={`mb-4 p-3 border rounded w-full focus:outline-none ${PrefernameError ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {PrefernameError && <p className="text-red-500 text-xs">{PrefernameError}</p>}
            <label className="block text-gray-700 text-sm font-bold mb-2">NIC Number/Passport Number</label>
            <input
              disabled
              type="text"
              placeholder="Enter your NIC number or Passport number"
              value={nicNumber}
              onChange={(e) => setNicNumber(e.target.value)}
              className={`mb-4 p-3 border rounded w-full focus:outline-none ${nicNumberError ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {nicNumberError && <p className="text-red-500 text-xs">{nicNumberError}</p>}

            <label className="block text-gray-700 text-sm font-bold mb-2">Select Team position</label>
            <select
              disabled
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className={`mb-4 p-3 border rounded w-full focus:outline-none ${teamError ? 'border-red-500' : 'border-gray-300'
                }`}
            >
              <option value="">Select Team position</option>
              <option value="Deputy-Competition-Manage">Deputy Competition Manage</option>
              <option value="Referee">Referee</option>
              <option value="Assistant-Referee">Assistant Referee</option>
              <option value="Umpire">Umpire</option>
              <option value="Player">Player</option>
              <option value="Official">Official</option>
              <option value="Media">Media</option>
              <option value="Technical-Delegate">Technical Delegate</option>
              <option value="Competition-Manager">Competition Manager</option>
              {/* Add more positions as needed */}
            </select>
            {teamError && <p className="text-red-500 text-xs">{teamError}</p>}

            <label className="block text-gray-700 text-sm font-bold mb-2">Upload Profile Picture</label>
            <input
              disabled
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4 p-3 border rounded w-full focus:outline-none"
            />

          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-end">
          <button
            disabled
            onClick={handleRegister}
            className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-red-600"
          >
            Register
          </button>
        </div>
      </div>

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

      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
        </div>
      )}
    </div>



  );
};

export default RegisterForm;
