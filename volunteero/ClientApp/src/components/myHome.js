import React, { Component } from "react";
import "../style/myhome.css";
import UserLocation from "./userLocation";

export default class MyHome extends Component {
  state = {};

  render() {
    return (
      <>
        <section className="bg-light py-7">
          <div className="conatinerHome">
            <div className="row">
              <div className="col-12 card card-body shadow-sm px-4 px-lg-0">
                <div className="row align-items-center py-4">
                  <div className="col-xl-5 col-md-6 offset-lg-1 text-center text-md-start py-4 py-lg-5">
                    <div className="lc-block mb-3">
                      <div editable="rich">
                        <h1 className="bold ">Who is Ihsan? </h1>
                      </div>
                    </div>
                    <div className="lc-block mb-4">
                      <div editable="rich"></div>
                    </div>
                    <div className="lc-block mb-5">
                      <div editable="rich">
                        <p className="mytext">
                          {" "}
                          Ihsan is a volunteer website platform that is build
                          for helping Non-profit organizations to seek
                          volunteers and carry out volunteer campaigns
                        </p>
                      </div>
                    </div>
                                    <div className="lc-block">
                                        <button type="button" className="btn btn-outline-danger m-2" onClick={() => window.open("/aboutus", "_blank")}>
                                            Read More
                                        </button>
                    </div>
                    {/* /lc-block */}
                                </div>

                  <div className="col-xl-6 col-lg-5 col-md-6">
                    <div className="lc-block text-center">
                      <img
                        className="img-fluid wp-image-1481"
                        src="https://img.freepik.com/free-vector/pollution-with-group-people-collecting-garbage-park-flat_1284-59407.jpg?w=1380&t=st=1688665911~exp=1688666511~hmac=ab2f88e26c03ff4c25dcb8f8eae6a33391062fdfe821a951987f94059f9cbfc9"
                        width={500}
                        height={597}
                        srcSet=""
                        sizes=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

            <section className="bg-light py-7">
                <div className="conatinerHome">
            <div className="row">
              <div
                lc-helper="background"
                className="col-lg-6 order-lg-2 rounded"
                style={{
                  minHeight: "50vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                }}
              />
              <div className="col-lg-6 order-lg-1">
                <div className="lc-block card card-body p-xl-5 border-0">
                  <div className="lc-block mb-5">
                    <div editable="rich">
                      <h1 className="bold">
                        Learn how our platform can help non-profit-organizations
                        to find volunteers
                      </h1>
                    </div>
                  </div>
                  <div className="lc-block mb-3">
                                    <div className="d-inline-block" editable="rich">
                                        <button type="button" className="btn btn-outline-danger m-2" onClick={() => window.open("/homepage", "_blank")}>
                                            Read More
                                        </button>
                    </div>
                    <div className="d-inline-block"></div>
                  </div>
                  <div className="lc-block">
                    <div editable="rich"></div>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-7">
            <div className="row">
              <div className="col-lg-3 mb-5 text-center text-lg-start">
                <div className="lc-block mb-4">
                  <div editable="rich">
                    <h3 className="bold rfs-16">
                      Our Clients say about us:
                    </h3>
                  </div>
                </div>
                {/* /lc-block */}
                <div className="lc-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5em"
                    height="5em"
                    fill="currentColor"
                    className="text-success"
                    viewBox="0 0 16 16"
                    style={{}}
                    lc-helper="svg-icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
                    />
                  </svg>
                </div>
                {/* /lc-block */}
              </div>
              <div className="col-md-4 col-lg-3 mb-4">
                <div className="card border-0 shadow ">
                  <div className="card-body py-4 ">
                    <div className="d-flex">
                      <img
                        style={{ width: 48, height: 48 }}
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1080&h=1080"
                        alt="Photo by Nicolas Horn"
                        className="rounded-2 shadow"
                        srcSet="https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1080&h=1080 1080w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=150 150w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=300 300w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=768 768w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1024 1024w"
                        sizes="(max-width: 1080px) 100vw, 1080px"
                        width={1080}
                        height={1080}
                      />
                      <div className="ps-2">
                        <h4 editable="inline" className="rfs-7 ms-2">
                          Mathew Glock
                        </h4>
                      </div>
                    </div>
                    <div className="lc-block mt-4 text-muted">
                      <div editable="rich">
                        <p>
                          i recomended this site for who looking for volunteers
                        </p>
                      </div>
                    </div>
                    <div className="lc-block rating mt-3 text-success">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>{" "}
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 mb-4">
                <div className="card border-0 shadow ">
                  <div className="card-body py-4 ">
                    <div className="d-flex">
                      <img
                        style={{ width: 48, height: 48 }}
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1080&h=1080"
                        alt="Photo by Leio McLaren"
                        className="rounded-2 shadow"
                        srcSet="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1080&h=1080 1080w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=150 150w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=300 300w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=768 768w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&ixlib=rb-1.2.1&q=80&w=1024 1024w"
                        sizes="(max-width: 1080px) 100vw, 1080px"
                        width={1080}
                        height={1080}
                      />
                      <div className="ps-2">
                        <h4 editable="inline" className="rfs-7 ms-2">
                          Tahmid William&nbsp;
                          <p />
                          <p />
                        </h4>
                      </div>
                    </div>
                    <div className="lc-block mt-4 text-muted">
                      <div editable="rich">
                        <p>
                          the website is easy to use and add posts form is good
                        </p>
                      </div>
                    </div>
                    <div className="lc-block rating mt-3 text-success">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>{" "}
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 mb-4">
                <div className="card border-0 shadow ">
                  <div className="card-body py-4 ">
                    <div className="d-flex">
                      <img
                        style={{ width: 48, height: 48 }}
                        src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=1080&h=1080"
                        alt="Photo by Amir Seilsepour"
                        className="rounded-2 shadow"
                        srcSet="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=1080&h=1080 1080w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=150 150w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=300 300w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=768 768w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&ixlib=rb-1.2.1&q=80&w=1024 1024w"
                        sizes="(max-width: 1080px) 100vw, 1080px"
                        width={1080}
                        height={1080}
                      />
                      <div className="ps-2">
                        <h4 editable="inline" className="rfs-7 ms-2">
                          Jarvis Ridley&nbsp;
                          <p />
                          <p />
                        </h4>
                      </div>
                    </div>
                    <div className="lc-block mt-4 text-muted">
                      <div editable="rich">
                        <p>
                          their platform is good on making and find volunteers
                          for voluntary
                        </p>
                      </div>
                    </div>
                    <div className="lc-block rating mt-3 text-success">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>{" "}
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="horizontal dark my-5" />
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="lc-block mb-4">
                  <div
                    className="ratio ratio-4x3 min-vh-50"
                    lc-helper="gmap-embed"
                                >
            <UserLocation />
</div>
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
              <div className="col-md-6 px-5">
                <div className="lc-block mb-4">
                                <div editable="rich">
                                    <h1 className="bold">
                      Find us!
                      <p />
                      <p />
                    </h1>
                  </div>
                </div>
                <div className="lc-block mb-4">
                  <div editable="rich">
                    <p>Location: Baghdad</p>
                    <p >Phone Number: 9647715646560, 07700284926</p>
                    <p>Email: omer.husam12@gmail.com, yaseenaiman17@gmail.com</p>
                  </div>
                </div>
                <div className="lc-block mb-4">
                  <div editable="rich">
                    <p></p>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
            </div>
          </div>
        </section>
        <p className="py-5 small text-center text-muted"></p>
        <section>
          <div
            className="d-flex container-fluid"
            lc-helper="background"
            style={{
              minHeight: "40vh",
              background:
                "url(https://images.unsplash.com/photo-1638140020886-587476d1e6d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)  center / cover no-repeat",
            }}
          />
          <div
            className="container py-5 bg-light"
            style={{ marginTop: "-20vh" }}
          >
            <div className="row">
              <div className="col-md-12 text-center text-dark">
                <div className="lc-block">
                  <div className="lc-block ">
                    <div editable="rich">
                    {/*  <h2>IHSAN </h2>*/}
                    </div>
                  </div>
                  {/* /lc-block */}
                </div>
                {/* /lc-block */}
                <div className="lc-block text-center">
                  <div editable="rich">
                   <h2> Ihsan </h2>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="d-flex col-md-12 justify-content-center">
                <div className="lc-block text-center text-dark py-5 mx-2">
                  <a
                    className="text-decoration-none"
                    href="https://www.facebook.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="2em"
                      height="2em"
                      lc-helper="svg-icon"
                      fill="currentColor"
                    >
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                    </svg>
                  </a>
                </div>
                <div className="lc-block text-center text-dark py-5 mx-2">
                  <a
                    className="text-decoration-none"
                    href="https://www.pinterest.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="2em"
                      height="2em"
                      lc-helper="svg-icon"
                      fill="currentColor"
                    >
                      <path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z" />
                    </svg>
                  </a>
                </div>
                <div className="lc-block text-center text-dark py-5 mx-2">
                  <a
                    className="text-decoration-none"
                    href="https://www.linkedin.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="2em"
                      height="2em"
                      lc-helper="svg-icon"
                      fill="currentColor"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                </div>
                <div className="lc-block text-center text-dark py-5 mx-2">
                  <a
                    className="text-decoration-none"
                    href="https://www.instagram.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="2em"
                      height="2em"
                      lc-helper="svg-icon"
                      fill="currentColor"
                    >
                      <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

