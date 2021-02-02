import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/fa/css/all.css';

class MyFooter extends Component {
    render() {
        return (
            <div className="container footer-color">
                <br></br>

                <div className="row">
                    <div className="col-md-8 col-sm-8"></div>
                    <div className="col-md-4 text-right">
                        <h6>FOLLOW US : </h6>
                        <a href="https://www.facebook.com/Hashcodejr/" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/images/facebook.jpg"}
                                alt="Mypic3"
                            />
                        </a>
                                        &nbsp;
                         <a href="https://www.instagram.com/hashcodejr/" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/images/instagram.jpg"}
                                alt="Mypic4"
                            />
                        </a>
                                        &nbsp;
                       <a href="https://www.linkedin.com/company/code-jr/" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/images/linkedin.jpg"}
                                alt="Mypic5"
                            />
                        </a>
                                        &nbsp;
                      <a href="https://www.twitter.com/Hashcodej/" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/images/twitter.jpg"}
                                alt="Mypic6"
                            />
                        </a>
                        <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-7 col-sm-7">
                        <p className="p-2">
                            Copyright Lejhro Technology Pvt. Ltd. © 2020. All Rights Reserved
                        </p>
                    </div>
                    <div className="col-md-5 col-sm-5">
                        <p className="p-2 text-right">
                            Vocal for Local
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyFooter;

