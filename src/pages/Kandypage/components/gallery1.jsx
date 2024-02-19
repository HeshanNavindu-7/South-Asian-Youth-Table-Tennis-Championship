// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import './gallery1.css';

const Gallery1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://www.destinationsrilanka.travel/images/kandy/kandy01.jpg',
      title: 'Temple of the Tooth Relic (Sri Dalada Maligawa)',
      description: ' As mentioned earlier, this temple is the most iconic attraction in Kandy, drawing thousands of pilgrims and tourists each year.'
    },
    {
        image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Peridenya-Gardens-kandy-sri-lanka1.jpg',
        title: 'Peradeniya Botanical Gardens',
        description: 'Located just outside Kandy, these gardens are renowned for their vast collection of orchids, palms, and exotic plants. It is a serene place for leisurely walks and picnics.'
      },
      {
        image: 'https://i0.wp.com/intheworldsjungle.com/wp-content/uploads/2020/09/Lake-view-Kandy.jpg?fit=800%2C450&ssl=1',
        title: 'Kandy Lake',
        description: 'Built in 1807 by King Sri Vikrama Rajasinha, this artificial lake adds to the scenic beauty of Kandy and offers opportunities for boating and relaxation.'
      },
      {
        image: 'https://pyt-blogs.imgix.net/2021/05/46114745325_75a97f7d0d_b.jpeg?auto=format&fit=scale&h=741&ixlib=php-3.3.0&w=1024&wpsize=large',
        title: 'Royal Palace of Kandy',
        description: 'Although only remnants of the palace remain today, it provides insights into the architectural grandeur of the Kandyan era.'
      },
      {
        image: 'https://www.srilankanexpeditions.lk/tour_img/153130817203.jpg',
        title: 'Udawatta Kele Sanctuary',
        description: 'A protected forest reserve situated behind the Temple of the Tooth Relic, offering nature trails and a diverse range of flora and fauna.'
      },
      {
        image: 'https://zigmatours.com/wp-content/uploads/2023/11/The-Temple-of-Tooth-Relic-Kandy-1024x576.jpg',
        title: 'Significance',
        description: "Kandy holds immense significance both culturally and politically. It was the capital of the last Sinhalese kingdom, preserving Sri Lanka's independence against colonial powers until its fall to the British. The Temple of the Tooth Relic remains a symbol of Buddhist faith and national pride, embodying the island's spiritual essence"
      },
      
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className='boxg1'>
        <div className="dis">
          <h1>Kandy</h1>
          <h2>Kandy is a historically significant city located in the central hills of Sri Lanka. It is the second-largest city in the country and holds great cultural, religious, and political importance. Here's a comprehensive note about Kandy covering its history, culture, attractions, and significance.</h2>
        </div>
      </div>
      <div className="boxg2">
        <img className="" src="https://kandycity.lk/wp-content/uploads/2014/07/BG0FKF-e1589657377551-1024x632.jpg" alt="" />
        <div className="dis1 ">
          <h1>History</h1>
          <h2>Kandy served as the last capital of the ancient kings' era of Sri Lanka and remained an independent kingdom until it was captured by the British in 1815. The city's history dates back to the 14th century when it was established as a capital by King Wickramabahu III. Kandy gained prominence due to its strategic location and natural defenses provided by the surrounding mountains and dense forests.</h2>
        </div>
      </div>
      <div className="boxg3">
        <div className="slider">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} width="700px" />
          <div className="dis">
            <h1>{slides[currentSlide].title}</h1>
            <h2 className="max-w-2xl">{slides[currentSlide].description}</h2>
          </div>
        </div>
      </div>
      <div className='boxg4'>
        <div className="dis">
          <h1>Modern Kandy</h1>
          <h2>Today, Kandy is a bustling city with a blend of historical charm and modern amenities. It serves as a major hub for trade, tourism, and education in central Sri Lanka. The city offers a range of accommodations, restaurants, and shops catering to the needs of visitors from around the world.</h2>
        </div>
      </div>

    </>
  );
};

export default Gallery1;
