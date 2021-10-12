import "./Testimonial.css";
import React from 'react';
import rock from "./avatar.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import left from "./arrow-left.svg";
import right from "./arrow_right.svg";
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css'



//function for making the testimonial card
function card(){
    return(
        <>
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
        </>
    )
}

const Testimonial = () => {
    const params = {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true,
          breakpoints: {
            1920: {
              slidesPerView: 3,
              spaceBetween: 50
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            }
          }
       
      }
  


    return (
        <div className="testimonial-container">
            <h2>What people are saying</h2>
            <section className="testimonial-content-wrapper">
            <Swiper {...params}>
                <div>{card()}</div>
                <div>{card()}</div>
                <div>{card()}</div>
                <div>{card()}</div>
                <div>{card()}</div>
                <div>{card()}</div>
                <div>{card()}</div>            
            </Swiper>                        
            </section>            
        </div>
    )
}

export default Testimonial
