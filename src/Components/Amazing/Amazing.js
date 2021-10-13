import "./Amazing.css";
import React, {useState, useEffect } from 'react';
import cloudimg from "./cloud3.png"
import cloud_scroll from "./Cloud-scroll.png"
//function for diplaying the motion of cloud on scroll using react hooks
const Amazing = () => {

           //Amazing scroll when active state
           const [cloud, setCloud] = useState(false)
  
           // scroll display cloud function
           const displaycloud = () => {
             console.log(window.scrollY)
             if (window.scrollY >= 2050 && !cloud) {
                setCloud(true)
             } else if(window.scrollY < 2050 && cloud) {
                setCloud(false)
             }
           }
       
           useEffect(() => {
            displaycloud()
               // adding the event when scroll change background
               window.addEventListener("scroll", displaycloud)
             })



    return (
        <div className="amazing-container">
            <div className="amazing-wrapper">
                <section className="amaze-section">
                    <article className="amaze-content">
                        <p className="amazing-feature">amazing features</p>
                        <h2>Never forget anything, ever again</h2>
                        <p>We're a growing family of 382,081 designers and makers from around the world.</p>
                        <button className="amaz-btn">Find out more</button>
                    </article>
                </section>
                <section className="cloud-container">
                    <img className={cloud?"cloud-effect-in":"cloud-effect-out"} src={cloud_scroll} alt="effect"/>
                    <img className="cloud-platform" src={cloudimg} alt="cloud"/>
                </section>
            </div>
            
        </div>
    )
}

export default Amazing

