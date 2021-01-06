import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export class Header extends Component {
  render() {
    return (
      <header id="header">
         <div className="intro">
          <div className="overlay">
            <div class="carousel-wrapper">
              <Carousel infiniteLoop autoPlay swipeable={false} showArrows={false} showThumbs={false} showStatus={false} stopOnHover={false} interval={6000}>
                <div>
                  <img src="img/intro-bg.jpg" />
                </div>
                <div>
                  <img src="img/intro-bg-night.jpg" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
