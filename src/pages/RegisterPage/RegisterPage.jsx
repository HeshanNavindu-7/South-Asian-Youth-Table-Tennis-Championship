// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from './components/RegisterForm';



const RegisterPage = () => {
  return (
    <div className=' w-full overflow-hidden'>
      <div className=' m-auto relative ' style={{ width: "700px" }}>
        <img className='  z-10 max-sm:w-96 max-sm:left-10 max-sm:top-52 absolute top-20 left-20' src="https://i0.wp.com/www.onlygfx.com/wp-content/uploads/2020/05/closed-stamp-7.png?ssl=1" alt="" />

      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
