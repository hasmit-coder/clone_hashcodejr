import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNavbar extends Component{
    render(){
        return <>
            <header className="App-header_hashcode">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 text-left logo">
                            <a href="/hashcodejr">
                                <img className="image_hashcode_logo"
                                    src={process.env.PUBLIC_URL + "/images/HASHCODE_LOGO.png"}
                                    alt="Hashcodepic1"     
                                />
                            </a>
                        </div>
                        <div className="col-md-4 col-sm-6 book-free-demo">
                            <a href="https://forms.gle/FASyaqmwpExDmkuN7" target="_blank"
                                className="btn btn_hashcode"><i className="fa fa-calendar"><b> Book a FREE Demo!</b></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    }
}

export default TopNavbar;