import "./Portfolio.css";
import "./Experience.css";
import Navbar from "./Navbar";

import website from "../img/Screenshot (226).png"
import calculator from "../img/Screenshot (225).png";
import cpsudms from "../img/Screenshot (224).png";
import advertising from "../img/advertising.jpg";
import photomanipulation from "../img/photomanipulation.jpg";
import trophy from "../img/TROPIE 2.jpg";
import calendar from "../img/erl2 (1).jpg";
import portal from "../img/portal 2.jpg";
import portal1 from "../img/portal3.jpg";
import palihug from "../img/jake.jpg";
import bookmark1 from "../img/bookmark (1).jpg";
import bookmark2 from "../img/bookmark2 (1).jpg";
import tshirt from "../img/tshirt.jpg";



const Portfolio = () => {
  return (
    <>
      <Navbar />
      
     

      <section id="info">
        <div class="section-heading text-center mb-1"></div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
            <section id="portfolio">
        <div className="container mt-2">
          <div className="pb-5 mt-"></div>
          <h3 className="fw-bold display-2 text-center mt-1 pt-1">
          
          </h3>
        </div>
      </section>
      <div class="col-md-6 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2> Capstone Project</h2>
                  </div>
                  <div className=" p-1 shadow">
                    <li class="nav-item">
                    </li>
                  </div>
                  <div className=" p-1 shadow text-center">
                    
                  </div>
                  <div className="card p-1 shadow mt-1">
                    <li class="nav-item">
                      <a href="https://cpsu-dormitory-monitoring-system.000webhostapp.com/">
                        <img src={cpsudms}></img>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
              <div class="col-md-6 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>Website</h2>
                  </div>
                  <div className=" p-1 shadow">
                    <li class="nav-item">
                    </li>
                  </div>
                  <div className=" p-1 shadow text-center">
                    <ul>
                    
                    </ul>
                  </div>
                  <div className="card p-1 shadow mt-1">
                    <li class="nav-item">
                      <a href="https://erlenejoyregala12.github.io/act_sirclyde/"  >
                      <img src={website} alt="" />
                      </a>
                    </li>
                  </div>
                </div>
              </div>
<center>
             
              <div class="col-md-6 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>Calculator</h2>
                  </div>
                  <div className=" p-1 shadow">
                    <li class="nav-item">
                    </li>
                  </div>
                  <div className=" p-1 shadow text-center">
                    <ul>
                   
                    </ul>
                  </div>
                  <div className="card p-1 shadow mt-1">
                    <li class="nav-item">
                      <a href="https://erlenejoyregala12.github.io/calculator/">
                        <img src={calculator} alt="" />
                      </a>
                    </li>
                  </div>
                </div>
              </div>
              </center>
            </div>
          </div>
        </div>
      </section>
      
      <section id="photos">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="card align-items-center">
              <h4 className="ms-3 mt-3">OJT OUTPUTS</h4>
              <p>I  have experience in creating a wide range of layouts, including birthday layouts, bookmarks, photomanipulation, and calendars.
                This was part of my on-the-job training (OJT), where I discovered and honed my talent for designing and bringing creative ideas to life through these projects.

              </p>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={advertising} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={photomanipulation} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={trophy} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={calendar} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="card align-items-center"></div>

            <div className="container">
              <div className="row">
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={palihug} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={portal} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={portal1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={tshirt} alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="card align-items-center"></div>

            <div className="container">
              <div className="row">
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={bookmark1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg mb-1 mt-3">
                  <div className=" p-3">
                    <div className="card">
                      <img src={bookmark2} alt="" />
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

export default Portfolio;
