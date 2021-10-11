import "./Amazing.css";
import React from 'react';
import cloud from "./cloud3.png"

const Amazing = () => {
    return (
        <div className="amazing-container">
            <div className="amazing-wrapper">
                <section>
                    <article className="amaze-content">
                        <p className="amazing-feature">amazing features</p>
                        <h2>Never forget anything, ever again</h2>
                        <p>We're a growing family of 382,081 designers and makers from around the world.</p>
                        <button className="amaz-btn">Find out more</button>
                    </article>
                </section>
                <section className="cloud-container">
                    <img src={cloud} alt="cloud"/>
                </section>
            </div>
            
        </div>
    )
}

export default Amazing

