import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Discover Porto</h2>
        {/*    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>*/}
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/01-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                       
                      </div>
                      <img
                        src="img/portfolio/01-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/02-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                        
                      </div>
                      <img
                        src="img/portfolio/02-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/06-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                         
                      </div>
                      <img
                        src="img/portfolio/06-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
             {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/04-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                         
                      </div>
                      <img
                        src="img/portfolio/04-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/05-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                        
                      </div>
                      <img
                        src="img/portfolio/05-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/06-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                        
                      </div>
                      <img
                        src="img/portfolio/06-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>*/}
              {/*<div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/07-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                        
                      </div>
                      <img
                        src="img/portfolio/07-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>*/}
              {/*<div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/08-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                        
                      </div>
                      <img
                        src="img/portfolio/08-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>*/}
              {/*<div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/09-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover-text">
                        
                      </div>
                      <img
                        src="img/portfolio/09-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
