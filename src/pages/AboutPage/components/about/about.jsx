import React, { useState } from 'react';
import './about.css';
import { BsPlayFill } from 'react-icons/bs';
import PDF from '../PDF/PDF';

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
        <h2 className="text-center w-1/2 m-auto text-3xl">Tennis is a racket sport that is played either individually or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. </h2>
      </div>

      <div className="mx-auto py-8 mt-20">
      <h1 className="text-3xl font-bold mb-4  text-center">PROSPECTUS</h1>
      
      {/* Embedded PDF */}
      <div className="relative m-auto w-10/12" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="/TTASL Prospectus 2024 South Asian Youth Championships_SLR.pdf"
          className="absolute top-0 left-0 w-full h-full"
          title="PDF Viewer"
        ></iframe>
      </div>
      {/* Button for downloading the PDF */}
      <a
        href="/TTASL Prospectus 2024 South Asian Youth Championships_SLR.pdf"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block mt-4 absolute right-40"
        download
        style={{ marginTop: "2rem" }}
      >
        Download PDF
      </a>
    </div>
      
      <div className="video w-full mt-10 relative">
        {!isVideoPlaying && (
          <button
            className="play-btn cursor-pointer"
            onClick={handlePlayButtonClick}
            aria-label="Play Video"
          >
            <BsPlayFill className=" text-red-500"/>
          </button>
        )}

        
        <video
          id="videoPlayer"
          controls
          width="85%"
          height="auto"
          onPlay={() => setVideoPlaying(true)}
          onPause={() => setVideoPlaying(false)}
          className="m-auto mt-28"
        >
          <source src="https://v1.cdnpk.net/videvo_files/video/free/video0542/large_preview/_import_6319998d0f7554.88000426.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default About;
