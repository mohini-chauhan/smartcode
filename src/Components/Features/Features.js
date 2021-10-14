import "./Features.css";
import React from 'react';
import travel from "./Travel3iphonedesign11.png";
import speachbubbleL from "./Speachbubble.png";
import speachbubbleR from "./Speachbubble2.png"

//feature section including the iphone and speachbubble animation

const Features = () => {
    return (
        <div className="features-container">
            <section className="feature-wrapper">
                <article className="anime-feature">
                    <img className="SL" src={speachbubbleL} alt="speachIcon"/>
                    <img className="SR" src={speachbubbleR} alt="Speach-Icon"/>
                    <img className="Iphn" src={travel} alt="iphone"/>
                    
                </article>
                <article className="feature-content">
                    <p className="amaz-feature">Amazing features</p>
                    <h2>Your busy life deserves this</h2>
                    <p>We're a growing family of 382,081 designers and makers from around the world</p>
                    <button className="feature-btn">Launch Solo Desktop App</button>
                </article>
            </section>
            
        </div>
    )
}

export default Features
