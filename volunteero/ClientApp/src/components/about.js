import React, { Component } from "react";
import "../style/about.css";

class Sam extends Component {
  state = {};

  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-left">
                <div className="lc-block mb-2">
                  <div editable="rich">
                    <br></br>
                    <br></br>
                                    <h1 className="bold">About Ihsan </h1>
                    <br></br>
                  

                    <p className="text-dark">
                      Ihsan is a website platformm that is build for
                      helping non-profit organizations to seek volunteers and
                      carry out volunteer campaigns
                    </p>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
              <div className="col-md-6">
                <div className="lc-block shadow">
                  <img
                    className="img-fluid"
                    alt=""
                    src="https://img.freepik.com/free-vector/pollution-with-group-people-collecting-garbage-park-flat_1284-59407.jpg?w=1380&t=st=1688312360~exp=1688312960~hmac=f21cdb74ec5176fc27e6adefe7e2c300ff1361916f4c1ea6180693bdb6ae9098"
                  />
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
            </div>
          </div>

          {/* /col */}
        </div>
        <>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.about-img-shape {margin:30px;z-index:1}\n.about-img-shape::before {\n\tposition: absolute;\n    left: -31px;\n    top: -30px;\n    width: 80%;\n    height: 90%;\n    z-index: -1;\n    content: '';\n    background-color: var(--bs-dark);\n    transition: .5s;\n\t\n}\n.about-img-shape:after {\n    position: absolute;\n    right: -31px;\n    bottom: -30px;\n    width: 80%;\n    height: 90%;\n    z-index: -1;\n    content: '';\n    background-color: var(--bs-dark);\n    transition: .5s;\n}\n",
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="lc-block">
                  <span editable="inline" className="small mt-4 d-block"></span>
                  <h2 editable="inline" className="display-2 mb-0"></h2>
                  <p editable="inline"> </p>
                </div>
                {/* /lc-block */}
              </div>
            </div>
            <div className="container py-5">
              <div className="row m-4">
                <div className="col-lg-5 align-self-center">
                  <div className="lc-block about-img-shape position-relative">
                    {" "}
                    <img
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1618477460930-d8bffff64172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Photo by Dane Deaner"
                    />
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 my-2 align-self-center">
                  <div className="lc-block">
                                    <div editable="rich">
                                        <div className="titleabout">
                                            <h1 className="bold">
                        Why we have built Ihsan!
                        <br />
                                            </h1>
                                        </div>
                                        <br></br>

                                        <p className="text-dark">
                        Helping Non-profit organizations to seek volunteers and
                        carry out volunteer campaigns
                      </p>
                    </div>
                  </div>
                  {/* /lc-block */}
                </div>
              </div>
              <div className="row m-4">
                <div className="col-lg-6 offset-lg-1 my-2 align-self-center">
                  <div className="lc-block">
                                    <div editable="rich">
                                        <div className="titleabout">

                                            <h1 className="bold">
                        What is the message we want to convey about
                        volunteering?
                                            </h1>
                                        </div>
                                        <br></br>

                                        <p className="text-dark">
                        Volunteering promotes a sense of togetherness and
                        community. It shows that we are all interconnected and
                        that we can come together to make a positive impact. By
                        helping others, we foster a spirit of unity and show
                        that we are willing to support one another.
                      </p>
                    </div>
                  </div>
                  {/* /lc-block */}
                </div>
                <div className="col-lg-5 align-self-center">
                  <div className="lc-block about-img-shape position-relative">
                    {" "}
                    <img
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Photo by Dane Deaner"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container py-5">
              <div className="row min-vh-25 align-items-center text-center">
                <div className="col-xl-4 mb-5 mb-xl-0">
                  <div className="lc-block">
                    <div className="d-inline-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          lc-helper="svg-icon"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </div>
                      <div className="ms-3 align-self-center" editable="rich">
                                            <p className="lead">xxx-xxx-xxx</p>
                                            <p className="lead">770-028-4926</p>

                      </div>
                    </div>
                  </div>
                  {/* /lc-block */}
                </div>
                {/* /col */}
                <div className="col-xl-4 mb-5 mb-xl-0">
                  <div className="lc-block">
                    <div className="d-inline-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                          style={{}}
                          lc-helper="svg-icon"
                          fill="currentColor"
                        >
                          <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                        </svg>
                      </div>
                      <div className="ms-3 align-self-center" editable="rich">
                        <p className="lead">Baghdad</p>
                      </div>
                    </div>
                  </div>
                  {/* /lc-block */}
                </div>
                {/* /col */}
                <div className="col-xl-4 mb-5 mb-xl-0">
                  <div className="lc-block">
                    <div className="d-inline-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                          style={{}}
                          lc-helper="svg-icon"
                          fill="currentColor"
                        >
                          <path d="M13 17H17V14L22 18.5L17 23V20H13V17M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V14H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z" />
                        </svg>
                      </div>
                      <div className="ms-3 align-self-center" editable="rich">
                                            <p className="lead">omarali.husam2000@gmail.com</p>
                                            <p className="lead">yaseenaiman17@gmail.com</p>

                      </div>
                    </div>
                  </div>
                  {/* /lc-block */}
                </div>
                {/* /col */}
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default Sam;
