import "./Testimonial.css";
import React from 'react'
import rock from "./avatar.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons'
import left from "./arrow-left.svg"
import right from "./arrow_right.svg"
function card(){
    return(
        <div className="card-container">
            <div className="card-body">
                <div className="card-content">
                    <p>“ Solo is a powerful app that can connect a lot of services I’m using. It is so flexible!”</p>
                    <div className="rating-container">
                        <FontAwesomeIcon className="star-icon" icon={faStar}/>
                        <FontAwesomeIcon className="star-icon" icon={faStar}/>
                        <FontAwesomeIcon className="star-icon" icon={faStar}/>
                        <FontAwesomeIcon className="star-icon" icon={faStar}/>
                        <FontAwesomeIcon className="star-icon" icon={faStar}/>
                    </div>
                </div>
            </div>
            <div className="triangle"></div>
            <div className="person-desc">
                <div className="person-img"><img src={rock} alt=""/></div>
                <div className="person-detail">
                    <p className="person-name">Daneil</p>
                    <p>2 days ago</p>
                </div>
            </div>
            
        </div>
    )

}

const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <h2>What people are saying</h2>
            <section className="testimonial-content-wrapper">
                {card()}
                {card()}
                {card()}
                
             
            </section>
            <div className="direction-container">
                <button onClick="">
                    <img src={left} alt=" left"/>
                </button>
                <button onClick="">
                    <img src={right} alt=" left"/>
                </button>
                
            </div>
        </div>
    )
}

export default Testimonial
