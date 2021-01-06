import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact" className='text-center'>
          <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
          </div>
            <div className="col-mc-offset-1">
              <div className="contact-item">
                <h3>Contact Info</h3>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>Phone
                  </span>{" "}
                  &nbsp;
                  {this.props.data ? this.props.data.phone : "loading"}
                 <br/>
                    &nbsp;
                  {this.props.data ? this.props.data.phone2 : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i>Email
                  </span>{" "}
                    &nbsp;&nbsp;&nbsp;
                    {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    {/*<li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
             All contents ©2020 Bolivar. All rights reserved.<br/>
             All pictures shown are for illustration purpose only.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
