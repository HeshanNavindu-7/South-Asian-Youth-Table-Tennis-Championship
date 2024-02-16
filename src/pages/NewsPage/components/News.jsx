// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, User, Inbox, Menu, Delete } from 'react-feather';
import { BsChatLeftText,BsFacebook } from "react-icons/bs";
import './News.css';

const News = () => {
  

  return (

    <div>
         <div className="about1 m-auto w-full h-52 overflow-hidden">
        <h2 className="text-center text-6xl relative top-20 text-white">News</h2>
      </div>
      <div className="dis w-full mt-10">
        <h2 className="text-center w-1/2 m-auto text-3xl">Tennis is a racket sport that is played either individually or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. </h2>
      </div>
    </div>
    


   
        
        
        
  );
};

export default News;
