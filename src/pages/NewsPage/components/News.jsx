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
            src="./images/b.jpeg"
            className="custom-shape  lg:max-w-80 lg:mx-1"
            alt=""
          />
        </div>
        <div className="box  md:text-center lg:w-1/3 mb-4 lg:ml-12">
          <div className="lg:text-left text-center">
           
            <p>
            Attention all advertisers! Are you looking to gain exposure during the South Asian Youth Table Tennis Championship 2024 in Kandy? Look no further! We have various advertising spaces available on our souvenir publication to suit your needs. Advertise on the back page in full color for 100,000 LKR, or opt for the back page inner for 25,000 LKR. For prime visibility, consider the front page inner for the same rate. Inner pages are also available: go for full color at 10,000 LKR or half color for 6,000 LKR. For further information and bookings, please get in touch with Mr. Chandana Perera at 0714472400. Don't miss this chance to reach a targeted audience and support a thrilling sporting event!</p>
          </div>
        </div>
        
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
           
            <p>
            The grizzled giant squirrel (Ratufa macroura) is a large tree squirrel in the genus Ratufa found in the highlands of the Central and Uva provinces of Sri Lanka, and in patches of riparian forest along the Kaveri River and in the hill forests of Karnataka, Tamil Nadu and Kerala states of southern India. The International Union for Conservation of Nature (IUCN) lists the species as near threatened due to habitat loss and hunting. Grizzled giant squirrels are named for the white flecks of hair that cover their greyish-brown bodies, giving them a grizzled look.</p>
          </div>
        </div>
        
      </div>
      
      <div className="cards flex flex-col sm:flex-row justify-center text-center mt-10">
        <div className="box lg:w-56 mb-4 mx-auto">
          <img
            src="./images/a.png"
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
