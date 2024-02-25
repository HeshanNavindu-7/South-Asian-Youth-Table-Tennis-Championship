import React from 'react';
import './News.css';

const News = () => {
  return (
    <div>
      <div className="about1 text-center m-auto w-full h-52 overflow-hidden">
        <h2 className="text-center text-6xl relative top-20 text-white">News</h2>
      </div>
      <div className="dis w-full text-center mt-10">
        <h2 className="text-center w-full sm:w-1/2 m-auto font-semibold text-3xl">
          Press Conference Announcement
        </h2>
      </div>

      <div className="cards flex flex-col sm:flex-row justify-center text-center mt-10">
        <div className="box lg:w-56 mb-4 mx-auto">
          <img
            src="./images/SACJTT_2024  mascot-01.png"
            className="custom-shape  lg:max-w-80 lg:mx-1"
            alt=""
          />
        </div>
        <div className="box  md:text-center lg:w-1/3 mb-4 lg:ml-12">
          <div className="lg:text-left text-center">
           
            <p>Mascot - SAYTTC 2024 - Kandy<br/>

National Animal of Sri Lanka

The Giant Squareail, scientifically known as Tetragonula iridipennis, is a fascinating species of stingless bee native to Sri Lanka. Renowned for its unique social structure and important ecological role, the Giant Squareail holds a special place in the biodiversity of the island nation.

This species of bee is notably larger than its counterparts and exhibits complex social behaviors within its colonies. The colonies are typically found in tree hollows or other sheltered locations, where thousands of individuals work together harmoniously. They play a crucial role in pollination, aiding in the reproduction of various flora across Sri Lanka's diverse ecosystems.

One of the distinguishing features of the Giant Squareail is its construction of intricate honeycombs. These honeycombs serve as both nurseries for the young bees and storage for pollen and nectar collected from surrounding flowers. Additionally, the honey produced by these bees is highly valued for its medicinal properties in traditional Sri Lankan medicine.

Despite its significance, the Giant Squareail faces threats from habitat loss, pesticide use, and climate change. Conservation efforts are crucial to ensure the continued existence of this remarkable species and to maintain the delicate balance of Sri Lanka's ecosystems.

Through education, habitat preservation, and sustainable beekeeping practices, we can work towards safeguarding the Giant Squareail and celebrating its role in the natural heritage of Sri Lanka. Protecting these tiny yet vital creatures is not only essential for biodiversity conservation but also for the well-being of ecosystems and human livelihoods across the island.</p>
          </div>
        </div>
        
      </div>
      
      <div className="cards flex flex-col sm:flex-row justify-center text-center mt-10">
        <div className="box lg:w-56 mb-4 mx-auto">
          <img
            src="./images/SACJTT Championship 2024 - Kandy_ logos-01.png"
            className="custom-shape  lg:max-w-80 lg:mx-1"
            alt=""
          />
        </div>
        <div className="box  md:text-center lg:w-1/3 mb-4 lg:ml-12">
          <div className="lg:text-left text-center">
           
            <p>TTASL thrilled to unveil the official logo for the South Asian Youth Table Tennis Championship 2024, set to be hosted in the beautiful city of Kandy. This emblem encapsulates the essence of the sport, the vibrancy of our region, and the rich cultural heritage of Sri Lanka.

Crafted with precision and creativity by the talented Mr. Samith Athukorala, the logo is more than just a symbol; it's a representation of unity, skill, and identity. At its core, you'll notice elements reminiscent of the Table Tennis Association of Sri Lanka's logo, signifying our commitment to the sport and its growth in our nation.

The depiction of the ball and the dynamic strokes across the design symbolize the fast-paced nature of table tennis, showcasing the agility and prowess of our young athletes who will compete in this championship. Additionally, the intricate patterns adorning the handle of the racket pay homage to the rich Kandyan heritage, infusing our local identity into the global sport.

As we prepare to welcome players and enthusiasts from across South Asia to Kandy, let this logo serve as a beacon of excitement and anticipation for the thrilling matches and unforgettable moments that lie ahead. Together, let's celebrate the spirit of sportsmanship, camaraderie, and excellence that defines the South Asian Youth Table Tennis Championship 2024.

<br/>See you in Kandy!</p>
          </div>
        </div>
        
      </div>
      <div className="cards flex flex-col sm:flex-row justify-center text-center mt-10">
        <div className="box lg:w-56 mb-4 mx-auto">
          <img
            src="./images/news1.jpeg"
            className="custom-shape  lg:max-w-80 lg:mx-1"
            alt=""
          />
        </div>
        <div className="box  md:text-center lg:w-1/3 mb-4 lg:ml-12">
          <div className="lg:text-left text-center">
            <h3>
              TTASL is thrilled to announce the upcoming press conference for the
              highly anticipated South Asian Youth Table Tennis Championship 2024.
            </h3>
            <h3 className='font-semibold text-xl'>Date </h3>
            <p>February 22, 2024 </p>

            <h3 className='font-semibold text-xl'>Time </h3>
            <p>5:00 pm onwards </p>
            <h3 className='font-semibold text-xl'>Location</h3>
            <p>University of Colombo</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default News;
