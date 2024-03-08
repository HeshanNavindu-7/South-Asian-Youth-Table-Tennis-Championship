import React from 'react';
import './itsme.css';

const Itsme = () => {
  // Create an array of objects, each containing information about the image
  const imagesData = [
    { name: 'Pramukshi  Fernando', school: "Bishop 's College Colombo", src: './images/pic1.jpeg' },
    { name: 'Shaneli Wickramanayaka', school: "Buddhist Ladies Collage - Colombo 7", src: './images/pic2.jpeg' },
    { name: 'Akeesha Samaraweera', school: "Anula Vidyalaya, Nugegoda",src: './images/pic3.jpeg' },
    {name: 'Hirundi Wickramasinghe', school: "Anula Vidyalaya - Nugegoda",src: './images/pic5.jpeg' },
    {name: 'T Luxshitaa ', school: "Bishop’s College - Colombo",src: './images/pic4.jpeg' },
    {src: './images/download.png' },
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
