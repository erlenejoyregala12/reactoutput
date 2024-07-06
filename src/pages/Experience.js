import "./Experience.css";
import Navbar from "./Navbar";

import advertising from "../img/advertising.jpg";


const Experience = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
        <svg
          className="air-waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
          </g>
          <g className="wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
          </g>
        </svg>

      </section>



      <section id="photos">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="card align-items-center">
              <h4 className="ms-3 mt-3">Designing</h4>
              <p>I  have experience in creating a wide range of layouts, including birthday layouts, bookmarks, photomanipulation, and calendars.
                This was part of my on-the-job training (OJT), where I discovered and honed my talent for designing and bringing creative ideas to life through these projects.
              </p>
            <div className="container">
              <div className="row">
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={advertising} alt="" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="photos">
        <div className="container">
          <div className="row justify-content-center mt-0">
            <div className="card align-items-center">
              <h4 className="ms-3 mt-3">Designing</h4>
              <p>I  have experience in creating a wide range of layouts, including birthday layouts, bookmarks, photomanipulation, and calendars.
                This was part of my on-the-job training (OJT), where I discovered and honed my talent for designing and bringing creative ideas to life through these projects.
              </p>
            <div className="container">
              <div className="row">
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={advertising} alt="" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Experience;
