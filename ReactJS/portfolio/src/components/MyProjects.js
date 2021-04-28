import React from "react";
import coffee from "./css/img/coffee.jpg";
import homered from './css/img/homered.svg'
function MyProjects() {
   
  return (
    <div id="myprojects" className="bg-dark p-5">
      <h1 className="text-bold text-center text-white">My Projects</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-header text-center fw-bold">
              React Books CRUD Application
              <div className="card-img-top">
                <img
                  src={coffee}
                  className="img-fluid"
                  height="300"
                  width="100%"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Project Information
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        This a Books CRUD application created using below
                        technologies
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Bootstrap</li>
                          <li>React Js</li>
                          <li>Json-server</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-around">
              <button className="btn btn-success">Source Code</button>
              <button className="btn btn-success">Watch video</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            <div className="card-header text-center fw-bold">
              React Books CRUD Application
              <div className="card-img-top">
                <img src={coffee} className="img-fluid" height="300" width="100%" alt="" />
              </div>
            </div>
            <div className="card-body">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Project Information
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        This a Books CRUD application created using below
                        technologies
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Bootstrap</li>
                          <li>React Js</li>
                          <li>Json-server</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-around">
              <button className="btn btn-success">Source Code</button>
              <button className="btn btn-success">Watch video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
