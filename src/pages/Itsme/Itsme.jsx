import React from 'react';
import './itsme.css';

const Itsme = () => {
  // Create an array of objects, each containing information about the image
  const imagesData = [
    { src: './images/download.png' },
    { name: 'Pramukshi  Fernando', school: "Bishop 's College Colombo", src: './images/pic1.jpeg' },
    {src: './images/download.png' },
    {src: './images/download.png' },
    {src: './images/download.png' },
    {src: './images/download.png' },
    {src: './images/download.png' },
    {src: './images/download.png' },
   
    // Add more objects for each image
  ];

  // Define the number of images to display in each row
  const imagesPerRow = 5;

  return (
    <div className='row bg-black '>
      {imagesData.map((imageData, index) => (
        <div key={index} className='column '>
          <img src={imageData.src} alt={`Image ${index + 1}`} />
          <div className='image-info font-bold text-white text-center'>
            <p> {imageData.name}</p>
            <p> {imageData.school}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itsme;