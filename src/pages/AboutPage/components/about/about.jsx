import React, { useState } from 'react';
import './about.css';
import { BsPlayFill } from 'react-icons/bs';
import PDF from '../PDF/PDF';
import LEADER from '../../../../components/leaderBoard/leader';

const About = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setVideoPlaying(true);
    document.getElementById('videoPlayer').play();
  };

  return (
    <div>
      <div className="about1 m-auto w-full h-52 overflow-hidden">
        <h2 className="text-center text-6xl relative top-20 text-white">About</h2>
      </div>
      <div className="dis w-full mt-10">
        <h2 className="text-center lg:mx-24 mx-7 m-auto text-3xl">Table Tennis, also known as ping-pong, is a fast-paced indoor sport that has gained immense popularity worldwide due to its accessibility, simplicity, and exhilarating gameplay. It is played both recreationally and competitively, with millions of enthusiasts participating in clubs, leagues, and international tournaments.</h2>
      </div>

      <PDF/>

      <LEADER/>
      
    </div>
  );
};

export default About;
