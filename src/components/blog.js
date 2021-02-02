import React, { Component } from 'react';
// import './App.css';


class Blog extends Component {
    render() {
        return <>
            <div className="container">
                <div className="row blogLinks">
                    <a href="" className="blog-card">
                        <div className="">
                            <img className = "col-md-12 col-sm-12 img_blog" src = {process.env.PUBLIC_URL + "/images/blog1.png"}></img>
                            <p className="col-md-12 col-sm-12">Blog Post1</p>
                        </div>
                    </a>
                    <a href="" className="blog-card">
                        <div className="">
                            <img className = "col-md-12 img_blog" src = {process.env.PUBLIC_URL + "/images/blog2.jpg"}></img>
                            <p className="col-md-12">Blog Post2</p>
                            <span>Date</span>
                        </div>
                    </a>
                    <a href="" className="blog-card">
                        <div className="">
                            <img className = "col-md-12 img_blog" src = {process.env.PUBLIC_URL + "/images/blog3.jpg"}></img>
                            <p className="col-md-12">Blog Post3</p>
                        </div>
                    </a>
                </div>
                {/* <div className="row blogDescription">
                    <div className="col-md-12 col-ms-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-md-12 col-ms-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div> */}
            </div>
        </>
    }
}

export default Blog;