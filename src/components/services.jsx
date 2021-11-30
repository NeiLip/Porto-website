import React, { Component } from "react";
import Collapsible from 'react-collapsible';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import NeilOfPorto from './NeilOfPorto';

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
              <div className="container">
          <div className="section-title">
            <h2>Port Of View<p><br/>Comércio do Port Street 213 &<br/>Street De Belmonte 9-11<br/><br/>porto, portougal</p></h2>
 <p>
             When Dreams Come True
            </p>
              
           
          </div>

          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-mc-offset-1">
                    {" "}
                  
                      

                          
              <Carousel infiniteLoop autoPlay swipeable={true} showArrows={true} showThumbs={false} showStatus={false} width='100%' emulateTouch={true} interval={6000} stopOnHover={true}>
                <div>
                  <img src="img/portofview/1.jpeg" />
                </div>
                <div>
                  <img src="img/portofview/2.jpeg" />
                </div>
                <div>
                  <img src="img/portofview/3.jpeg" />
                </div>
                <div>
                  <img src="img/portofview/4.jpeg" />
                </div>
                <div>
                  <img src="img/portofview/5.jpeg" />
                </div>
                <div>
                  <img src="img/portofview/6.jpeg" />
                </div>
                  <div>
                  <img src="img/portofview/7.jpeg" />
                </div>
              </Carousel>
          <br/>
                  <h2><p><br/>Download building plans & brochure</p></h2>
                  <a class="btn" href="/files/PORTOFVIEW_Brochure.pdf" download><i class="fa fa-download" ></i> Download</a>
                  </div>
                ))
              : "loading"} 
          </div>
        </div>
        <br/>
        <br/>
        <div className="container">
          <div className="section-title">
            <h1>   ____   </h1>
         </div>
        </div>
        <br/>

        <div className="container">
          <div className="section-title">
            <h2>Neil of Porto <p><br/>Rua dos Caldeireiros 95-97, porto, portougal</p></h2>
 <p>
             When Dreams Come True
            </p>
              
           
          </div>

          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-mc-offset-1">
                    {" "}
                  
                      

                          
              <Carousel infiniteLoop autoPlay swipeable={true} showArrows={true} showThumbs={false} showStatus={false} width='100%' emulateTouch={true} interval={6000} stopOnHover={true}>
                <div>
                  <img src="img/slider/1.jpg" />
                </div>
                <div>
                  <img src="img/slider/2.png" />
                </div>
                <div>
                  <img src="img/slider/3.jpg" />
                </div>
                <div>
                  <img src="img/slider/4.png" />
                </div>
                <div>
                  <img src="img/slider/5.png" />
                </div>
                <div>
                  <img src="img/slider/6.jpg" />
                </div>
                  <div>
                  <img src="img/slider/7.png" />
                </div>
                <div>
                  <img src="img/slider/8.png" />
                </div>
                <div>
                  <img src="img/slider/9.png" />
                </div>
                  <div>
                  <img src="img/slider/10.png" />
                </div>
                <div>
                  <img src="img/slider/11.jpg" />
                </div>
                <div>
                  <img src="img/slider/12.jpg" />
                </div>
                  <div>
                  <img src="img/slider/13.jpg" />
                </div>
              </Carousel>
          <br/>
                  <h2><p><br/>Download building plans & brochure</p></h2>
                  <a class="btn" href="/files/RuaDosCaldeireirosPortfolio.pdf" download><i class="fa fa-download" ></i> Download</a>
                  </div>
                ))
              : "loading"} 
          </div>

        </div>
      </div>
    );
  }
}

export default Services;
