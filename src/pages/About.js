import "./About.css";
import "./Education.css";

import Navbar from "./Navbar";

import IMG from "../img/Regala, Erlene Joy.jpg";
// import IMG1 from "../img/FAMILY1.jpg";
// import IMG2 from "../img/FAMILY2.jpg";
// import m1 from "../img/M1.jpg";
// import m2 from "../img/M2.jpg";
// import m3 from "../img/M3.jpg";
// import b2 from "../img/b2.jpg";
// import b3 from "../img/b3.jpg";
// import b5 from "../img/b5.jpg";
// import b4 from "../img/b4.jpg";
import vscode from "../img/vc-code.png"
import photoshop from "../img/Adobe_Photoshop_CC_icon.svg.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
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
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="carton">
        <div className="container ">
          <div className="col mt-7">
            <div className="card p-5 shadow">
              <div className="row mt-10">
                <div className="col-lg-5  mt-5">
                  <center>
                    <img
                      src={IMG}
                      alt="JOHN NOEL B. CUALES PROFILE PICTURE  "
                    />
                  </center>
                  <center>
                    <div className="card box">
                      <div className="row p-2">
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faSteam} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGithub} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGamepad} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faUnity} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faSpotify} />
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
                <div className="col-lg-7 text mt-5">
                  <h2 className="text-dark">About Me</h2>
                  <p>
                    I'm Erlene Joy Regala, a proud Central Philippines State University BSIT graduate. At this prestigious school, I learned software development, network administration, and database management.</p>

                  <p>At Central Philippines State University, I strived for greatness and promoted technology. Many projects showcased my technical skills and creativity. My willingness to learn and adapt have made me a skilled and trusted IT expert.</p>

                  <p>My creative layout skills complement my academic achievements. I create visually appealing and effective designs for customers and projects using my unique blend of technical skill and artistic talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="">
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>
      <section id="info">
        <div class="section-heading text-center mb-1 ">
          <h1>
            <i>Educational Attainment</i>
          </h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div className="card p-1 shadow">
                    <h4 className="text-center">
                      Bantayan Elementary School
                    </h4>
                    <p className="text-secondary">
                      Brgy. Bantayan, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2019</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>{" "}
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Bantayan National High School</h4>
                    <p className="text-secondary">
                      Brgy. Bantayan, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>{" "}
                  <div className="card p-1 shadow">
                    <h4 className="text-center">
                      Central Philippines State University
                    </h4>
                    <p className="text-secondary">
                      Brgy. Camingawan, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    
      <section id="info">
        <div class="section-heading text-center mb-1 mt-5">
          <h1>
            <i>SKILLS</i>
          </h1>
          <h6><p>As a Photoshop editor, I have a passion for photo manipulation and layout design.
            I enjoy transforming ordinary photos into extraordinary works of art by adjusting colors, adding elements,
            and creating unique effects. Using Photoshop, I can seamlessly blend different images, retouch imperfections, and create stunning visual compositions.</p>

          <p>In addition to photo manipulation, I also specialize in designing various types of layouts, such as birthday layouts, bookmarks, and calendars.
            I take pride in my ability to combine creativity with technical skills, ensuring that each design is both visually appealing and tailored to the
            specific needs of each project. My experience during my on-the-job training (OJT) has allowed me to develop and refine these talents, making me proficient
            in delivering high-quality, professional designs.</p></h6>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <section id="photos4">
                <div className="col-lg mb-1 mt-5 text-center">
                  <div className=" p-3">
                    <a>
                      <img src={photoshop}></img>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section id="info">
        <div class="section-heading text-center mb-1 mt-5">
          
          <h6><p>Visual Studio Code (VS Code) is a free, open-source code editor by Microsoft, supporting many programming languages with intelligent code completion and syntax 
            highlighting. It is highly customizable through extensions, themes, and settings. Key features include built-in debugging tools, an integrated terminal, Git integration, 
            remote development support, and real-time collaboration via Live Share. VS Code is ideal for software development, scripting, and learning, offering a productive and 
            flexible coding environment.</p></h6>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <section id="photos4">
                <div className="col-lg mb-1 mt-5 text-center">
                  <div className=" p-3">
                    <a>
                      <img src={vscode}></img>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">

        </div>
      </footer>
    </>
  );
};

export default About;
