import React, { Component } from "react";
import Collapsible from 'react-collapsible';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class Services extends Component {
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
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-mc-offset-1">
                    {" "}
                  
                      

                          
              <Carousel infiniteLoop autoPlay swipeable={true} showArrows={true} showThumbs={false} showStatus={false} width='100%' emulateTouch={true} interval={6000} stopOnHover={true}>
                <div>
                  <img src="img/slider/1.png" />
                </div>
                <div>
                  <img src="img/slider/2.png" />
                </div>
                <div>
                  <img src="img/slider/3.png" />
                </div>
                <div>
                  <img src="img/slider/4.png" />
                </div>
                <div>
                  <img src="img/slider/5.png" />
                </div>
                <div>
                  <img src="img/slider/6.png" />
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
                  <img src="img/slider/11.png" />
                </div>
                <div>
                  <img src="img/slider/12.png" />
                </div>
                  <div>
                  <img src="img/slider/13.png" />
                </div>
              </Carousel>
          
                   {/*   <div className="centerize">
                                        <img
                                          src="img/Building1/brochure-1.jpg"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                        </div>
                          <div className="centerize">
                                        <img
                                          src="img/Building1/brochure-2.png"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                        </div>
                           <div className="centerize">
                                        <img
                                          src="img/Building1/brochure-3.png"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                        </div>
                           <div className="centerize">
                                        <img
                                          src="img/Building1/brochure-4.png"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                        </div>
                           <div className="centerize">
                                        <img
                                          src="img/Building1/brochure-5.png"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                        </div>
                           <div className="centerize">
                                        <img
                                          src="img/Building1/brochure-6.png"
                                          className="img-responsive"
                                          alt="Project Title"
                                          resizeMode="contain"
                                        />{" "}
                        </div>
                      	*/}

                      


                       				  



                 
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
