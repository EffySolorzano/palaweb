import React from "react";
import "./landingPage.css";
import AnimatedBackground from "./AnimatedBackground";
import HeroImage from "./assets/HeroImage.jpg"

export default function LandingPage() {
  return (
    <section className="hero">
      <div className="hero-visual">
        <AnimatedBackground />
      </div>

      <div className="hero-content">
      <div className="hero-text">
        <div className="hero-icons-cluster">
        <span className="dot red"></span>
        <span className="dot pink"></span>
        <span className="dot gold"></span>
        </div>
        <h1 className="hero-heading">
        <span className="hero-heading-small">Digital</span>
           <br/> <span className="word-rotate">
            <span>Marketing</span>
            <span>Ad</span>
            <span>Branding</span>
            <span>Strategy</span>
            </span> 
          <span className="hero-heading-small">Services</span>
        </h1>
         <p className="hero-subtext">Small brands with big ideas.</p>
         <div className="hero-button-wrapper">  
           <button type="button" className="hero-button-custom">
             Let's Talk!
            </button>
          </div>       
                  
      </div>
      
        <div className="hero-image-wrapper">
    <img src={HeroImage} alt="Hero" className="hero-image" />
    <svg width="0" height="0">
      <defs>
        <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
         <path d="M0.9,0.5 C0.9,0.7 0.7,0.9 0.5,0.9 C0.3,0.9 0.1,0.7 0.1,0.5 C0.1,0.3 0.3,0.1 0.5,0.1 C0.7,0.1 0.9,0.3 0.9,0.5 Z" />
        </clipPath>
      </defs>
    </svg>
         </div>

      </div>
    </section>
  );
}
