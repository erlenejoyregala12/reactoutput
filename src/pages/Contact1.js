import "./Contact.css";
import fb1 from "../img/jnc20.png";
import fb from "../img/jnc1.png";
import fb2 from "../img/call.jpeg";
import fb3 from "../img/gmail1.jpeg";

import Navbar from "./Navbar";

const Contact1 = () => {
  return (
    <>
      <Navbar />
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
    

      <section id="photos1">
        <div className="col-lg mb-1 mt-5 text-center">
          <div className="container text-center">
            <div className="card align-items-center">
              <h4 className=" mt-3">
                Click the Icon to see My Social Media<h1>⬇️</h1>
              </h4>
            </div>
          </div>

          <div className=" p-3">
            <a href="https://www.facebook.com/erlene.regala.526?mibextid=ZbWKwL">
              <img src={fb}></img>
            </a>

          </div>
          <div className="container text-center">
            <div className="card align-items-center">
              <h4 className=" mt-3">
                My Phone Number<h1>⬇️</h1>
              </h4>
            </div>
          </div>
          <div className=" p-2">
            <img src={fb2}></img>

            <h1>+63153264102</h1>

            <img src={fb3}></img>
            <h1>erleneregala2@gmail.com</h1>
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

export default Contact1;
