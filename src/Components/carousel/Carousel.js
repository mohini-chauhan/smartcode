import "./Carousel.css";
import React,{Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import person from "./avatar.jpg";

export default class Carouseltest extends Component {
    render() {
      return (
          
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
        centerMode={true}
        >

          <div>
            <img src={person} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={person} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={person} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      );
    }
  }

