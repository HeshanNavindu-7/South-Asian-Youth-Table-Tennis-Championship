import React from 'react';
import './itsme.css';

const Itsme = () => {
  // Create an array of objects, each containing information about the image
  const imagesData = [
     {name: 'T Luxshitaa ', school: "Bishop’s College - Colombo",src: './images/pic4.jpeg' },
    {name: 'Charitha Gimhan de silva', src: './images/DSC_0237.jpg' },
    {name: 'Shinura kevin', src: './images/DSC_0238 (1).jpg' },
    {name: 'Sachitha', src: './images/DSC_0243.jpg' },
    {name: 'Sandew Hulangamuwa', src: './images/DSC_0244.jpg' },
    {name: 'Janith', src: './images/DSC_0242.jpg' },
   
    {name: 'Senul Rathnayaka', src: './images/DSC_0241.jpg' },
    {name: 'T. Hasira dinusara',src: './images/DSC_0240.jpg' },
    {name: 'Radinsa & Rohansa',  school: "Gateway College Colombo",src: './images/pic6.jpeg' },
    {name: 'Methuli Nelinya',src: './images/pic7.jpeg' },
    {name: 'Thinuli Thiyansa',src: './images/pic8.jpeg' },
    {name: 'Sandiw Kuruwita',  school: "Royal College, Colombo",src: './images/pic9.jpeg' },
    { name: 'Pramukshi  Fernando', school: "Bishop 's College Colombo", src: './images/pic1.jpeg' },
    { name: 'Shaneli Wickramanayaka', school: "Buddhist Ladies Collage - Colombo 7", src: './images/pic2.jpeg' },
    { name: 'Akeesha Samaraweera', school: "Anula Vidyalaya, Nugegoda",src: './images/pic3.jpeg' },
    {name: 'Hirundi Wickramasinghe', school: "Anula Vidyalaya - Nugegoda",src: './images/pic5.jpeg' },
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
