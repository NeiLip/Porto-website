import React, { Component } from 'react'
import Navigation from './navigation';
import Collapsible from 'react-collapsible';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class NeilOfPorto extends Component {

  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Neil of Porto <p><br/>Rua dos Caldeireiros 95-97, porto, portougal</p></h2>
            <p>
             When Dreams Come True
            </p>
              
           
          </div>

          <div className="row">
                 
                       <h3> Illustrations </h3>      
                      <div className="centerize">
                                        <img
                                          src="img/nop/building-night.jpeg"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                                      
                        </div>
                         <div className="centerize">
                                        <img
                                          src="img/nop/design/1.jpg"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                                      
                        </div>
                          <div className="centerize">
                                        <img
                                          src="img/nop/design/2.jpg"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                                      
                        </div>
                            <div className="centerize">
                                        <img
                                          src="img/nop/design/3.jpg"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                                      
                        </div>
                            <div className="centerize">
                                        <img
                                          src="img/nop/design/4.jpg"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                                      
                        </div>
                        <br/>
                        <h3> FLOOR PLANS </h3>      
                        <br/>
                        <h3> The Building </h3>      
                      <div className="centerize">
                                        <img
                                          src="img/nop/img1.png"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                      </div>
                         <div className="centerize">
                                        <img
                                          src="img/nop/img2.png"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                      </div>
                        <div className="centerize">
                                        <img
                                          src="img/nop/T1/coloredplan1.jpg"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                      </div>
                      <div className="centerize">
                                        <img
                                          src="img/nop/G/coloredplan1.jpg"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                      </div>


                 
          </div>
          <div className="donwload-link">
          <a href="/img/floorplans.pdf" download> Dowload Floor Plans</a>
          </div>
          </div>

        </div>
  
    );
  }
}

export default NeilOfPorto;
