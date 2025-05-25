import React from "react";
import "./landingPage.css";
import AnimatedBackground from "./AnimatedBackground";

export default function LandingPage() {
  return (
    <section className="hero">
      <div className="hero-visual">
        <AnimatedBackground />
      </div>

      <div className="hero-content">
        <div className="hero-text">
        <h1 className="hero-heading">
          Digital 
           <br/> <span className="word-rotate">
            <span>Marketing</span>
            <span>Ads</span>
            <span>Branding</span>
            <span>Strategy</span>
            </span> 
            Services
        </h1>
          <p className="hero-subtext">Small brands with big ideas.</p>
        </div>
      </div>
    </section>
  );
}
