import React from 'react'
import illustration from "./illustration.png";
import "./Hero.css";
import dwnld from "./dwnld.svg";
import invite from "./invite.svg";
import wrkspace from "./wrkspace.svg";
import track from "./track.svg";

function Appicon(toggle,data){

    return(
        <div className="appIcon-container"style={toggle?{border:'none'}:{}}>
            <div className="appicon-element">
                <img src={data["icon"]} alt="dwnld"/>
                <p className="step">Step {data["step"]}</p>
                <p>{data["desc"]}</p>
            </div>
        </div>
    )
}

const Hero = () => {
    var appData1={
        "icon":dwnld,
        "step":1,
        "desc":"Download the app"
    }
    var appData2={
        "icon":invite,
        "step":2,
        "desc":"Invite teammates"
    }
    var appData3={
        "icon":wrkspace,
        "step":3,
        "desc":"Create workspace"
    }
    var appData4={
        "icon":track,
        "step":4,
        "desc":"Track Performance"
    }
    return (
        <div className="hero-containner">
            <section className="hero-content">
                <article className="hero-header">
                    <p>Ready to use App?</p>
                    <h1>Download App </h1>
                    <p className="terms">By downloading App, you accept<span>Terms Of Use</span><br/>and<span>Privacy & Cookies</span>.</p>
                    <button className="hero-btn">Get Solo </button>
                </article>
                <div className="hero-img">
                    <img src={illustration} alt="illustration img"/>
                </div>
            </section>
            <section className="app-adv-section" >
                <article className="app-adv-contents">
                    <p>Why App?</p>
                    <h2>Fast, simple & effortless.</h2>
                </article>
                <div className="appicondisplay">
                    {Appicon(false,appData1)}
                    {Appicon(false,appData2)}
                    {Appicon(false,appData3)}
                    {Appicon(true,appData4)}
                </div>
                
            </section>
            
        </div>
    )
}

export default Hero
