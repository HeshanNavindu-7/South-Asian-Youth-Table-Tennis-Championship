import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { push, ref as dbRef } from 'firebase/database';
import { auth, database } from '../../../firebase';
import Modal from 'react-modal';
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
      const storageRef = ref(storage, `profile_images/${nicNumber}`);
      await uploadBytes(storageRef, profileImage);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, 'dummyPassword');
      const user = userCredential.user;

      // Store user registration data in Realtime Database
      const userRef = dbRef(database, `users/${user.uid}`);
      await push(userRef, {
        username: username,
        Prefername:Prefername,
        email: email,
        nicNumber: nicNumber,
        birthday:birthday,
        team:team,
        Country:Country,
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
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Register</h1>
          <input
            type="text"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`mb-4 p-3 border rounded w-full focus:outline-none ${
              usernameError ? 'border-red-500' : ''
            }`}
          />
          {usernameError && <p className="text-red-500 text-sm mb-4">{usernameError}</p>}
          <input
            type="text"
            placeholder="Preferred Name"
            value={Prefername}
            onChange={(e) => setPrefername(e.target.value)}
            className={`mb-4 p-3 border rounded w-full focus:outline-none ${
              PrefernameError ? 'border-red-500' : ''
            }`}
          />
          {PrefernameError && <p className="text-red-500 text-sm mb-4">{PrefernameError}</p>}
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
            type="text"
            placeholder="NIC Number/Passport Number"
            value={nicNumber}
            onChange={(e) => setNicNumber(e.target.value)}
            className={`mb-4 p-3 border rounded w-full focus:outline-none ${
              nicNumberError ? 'border-red-500' : ''
            }`}
           
          />
           {nicNumberError && <p className="text-red-500 text-sm mb-4">{nicNumberError}</p>}
           <label className="block mb-4">
            Birthday
           <input
              type="date"
              value={birthday}
              placeholder="Birthday"
              onChange={(e) => setBirthday(e.target.value)}
              className={`mb-4 p-3 border rounded w-full focus:outline-none ${birthdayError ? 'border-red-500' : ''}`}

            />
            </label>
            {birthdayError && <p className="text-red-500 text-sm mb-4">{birthdayError}</p>}
            <label className="block mb-4"> 
            <select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${teamError ? 'border-red-500' : ''}`}
            >
              <option value="">Select Team position</option>
              <option value="Athlate">Athlate</option>
              <option value="Coach">Coach</option>
              <option value="Manager">Manager</option>
              <option value="Physio">Physio</option>
              {/* Add more countries as needed */}
            </select>
            </label>
            
          
          {teamError && <p className="text-red-500 text-sm mb-4">{teamError}</p>}

          <label className="block mb-4"> 
            <select
              value={Country}
              onChange={(e) => setCountry(e.target.value)}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${CountryError ? 'border-red-500' : ''}`}
            >
              <option value="">Select country</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
<option value="Congo, Republic of the">Congo, Republic of the</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cote d'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czechia">Czechia</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor (Timor-Leste)">East Timor (Timor-Leste)</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Korea, North">Korea, North</option>
<option value="Korea, South">Korea, South</option>
<option value="Kosovo">Kosovo</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="North Macedonia">North Macedonia</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Morocco">Morocco</option>

              {/* Add more countries as needed */}
            </select>
            </label>
            {CountryError && <p className="text-red-500 text-sm mb-4">{CountryError}</p>}

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

      <div className="w-full lg:w-1/2 bg-cover bg-center h-1/3 lg:h-screen" style={{ backgroundImage: 'url("https://ca-times.brightspotcdn.com/dims4/default/28ff1a8/2147483647/strip/true/crop/8640x5760+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fae%2F1a%2F1eda09baf3d95f8819a5be5b4349%2F2c43e1d7a4ea4ecb8280c74d610aca0d")' }}>
        <div className="flex flex-col items-center justify-center h-full text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Your Title Here</h1>
          <p>Your description here.</p>
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
