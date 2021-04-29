import React from "react";
import coffee from "./css/img/coffee.jpg";
import homered from "./css/img/homered.svg";
import vi from "./css/img/20201015_140633.mp4";
import "./css/Myprojects.css";
function MyProjects() {
  let projectInfo = [
    {
      id: "one",
      projName: "Books Application",
      description: "Book Application using json-server",
      skillSet: "abc",
      techStack: ["HTML", "CSS", "Bootstrap", "React JS"],
    },
    {
      id: "two",
      projName: "Todo Application",
      descripttion: "Book Application using json-server",
      techStack: ["HTML", "CSS", "Material UI", "React JS"],
    },
    {
      id: "three",
      projName: "Todo Application",
      descripttion: "Book Application using json-server",
      techStack: ["HTML", "CSS", "Material UI", "React JS"],
    },
  ];

  return (
    <div id="myprojects" className="bg-dark p-5">
      <h1 className="text-bold text-center text-white">My Projects</h1>
      <div className="row">
        {projectInfo.map((item, id) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={id}>
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header text-center fw-bold">
                {item.projName}
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
                        data-bs-target={`#${item.id}`}
                        aria-expanded="true"
                        aria-controls={`${item.id}`}
                      >
                        Project Information
                      </button>
                    </h2>
                    <div
                      id={`${item.id}`}
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          {item.description}
                          <ul>
                            {item.techStack.map((tech, id) => (
                              <li>{tech}</li>
                            ))}
                          </ul>
                          {item.skillSet ? item.skillSet : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <a className="btn btn-success" href="https://github.com/">
                  Source Code
                </a>
                <a className="btn btn-success" href={vi}>
                  Watch video
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
