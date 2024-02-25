// src/pages/AboutPage.jsx
import React from 'react';
import './MoscotPage.css';
import { Footer } from 'flowbite-react';
import MyFooter from '../Footer/footer';

const MoscotPage = () => {
  return (
    <div>
      
      <div className="mosbox">
        <div className="dis">
            <h2>The Giant Squareail, scientifically known as Tetragonula iridipennis, is a fascinating species of stingless bee native to Sri Lanka. Renowned for its unique social structure and important ecological role, the Giant Squareail holds a special place in the biodiversity of the island nation.</h2>
        </div>
        <img src="/images/moscot.png" alt="" />
      </div>
      <div className="mosbox1">

        <h2>This species of bee is notably larger than its counterparts and exhibits complex social behaviors within its colonies. The colonies are typically found in tree hollows or other sheltered locations, where thousands of individuals work together harmoniously. They play a crucial role in pollination, aiding in the reproduction of various flora across Sri Lanka's diverse ecosystems.</h2>

      </div>
      <div className="mosbox2">
        <li>One of the distinguishing features of the Giant Squareail is its construction of intricate honeycombs. These honeycombs serve as both nurseries for the young bees and storage for pollen and nectar collected from surrounding flowers. Additionally, the honey produced by these bees is highly valued for its medicinal properties in traditional Sri Lankan medicine.</li>
        <li>Despite its significance, the Giant Squareail faces threats from habitat loss, pesticide use, and climate change. Conservation efforts are crucial to ensure the continued existence of this remarkable species and to maintain the delicate balance of Sri Lanka's ecosystems.</li>
        <li>Through education, habitat preservation, and sustainable beekeeping practices, we can work towards safeguarding the Giant Squareail and celebrating its role in the natural heritage of Sri Lanka. Protecting these tiny yet vital creatures is not only essential for biodiversity conservation but also for the well-being of ecosystems and human livelihoods across the island.</li>
      </div>
      <MyFooter/>
  
    </div>
  );
};

export default MoscotPage;
