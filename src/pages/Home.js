import "./Home.css";

import profile from "../img/profile.png";
import ml from "../img/Mobile_Legends_5v5_Logo_Fair_MOBA_for_Mobile.JPG.webp";
import onepiece from "../img/one-piece-desktop-idg4aqn5l0lh40dk.jpg";
import sololeveling from "../img/solo-leveling-arise.jpg";
import campaign from "../img/campaign.jpg";
import portal2 from "../img/portal 2.jpg";
import portal3 from "../img/portal3.jpg";
import advertising from "../img/advertising.jpg";
import jake from "../img/jake.jpg";
import merrychristmas from "../img/merry christmas and happy new yr (1).jpg";

import Navbar from "./Navbar";

const Home = () => {
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
      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img src={profile} alt="Erlene's  Profile" />
                    </div>
                  </div>
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">
                        <i>Hey, it's</i>
                      </h1>
                      <h1 className="text display-4 fw-bold">
                        <i>Erlene Joy Regala</i>
                      </h1>
                      <br />
                      <p className="self text-dark fw-bold">
                        Your layout artist with a keen eye for design.
                      </p>
                      <a href="/About" className="btn btn-brand shadow mt-5">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <section id="game">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="display-3 text-dark">
              <center> <strong> Layouts Specials </strong></center>
            </h3>
            <div className="col-lg-3 align-items-center">
              <div className="card">
                <h4 className="ms-3 mt-3 text-center">Campaign Layout</h4>
              </div>
              <div className="row">
                <div className="card">
                  <img src={campaign} alt="" />
                </div>
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3 text-center">Advertising</h4>
              </div>
              <div className="row">
                <div className="card">
                  <img src={advertising} alt="" />
                </div>
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3 text-center">Photomanipulation</h4>
              </div>
              <div className="row">
                <div className="card">
                  <img src={portal2} alt="" />
                  <img src={portal3} alt="" />
                </div>
              </div>

              <div className="card">
                <h4 className="ms-3 mt-3 text-center">Others</h4>
              </div>
              <div className="row">
                <div className="card">
                  <img src={jake} alt="" />
                  <img src={merrychristmas} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="info">
        <div className="container">
          <center><h1>Likes</h1></center>
          <div className="row">
            <div className="col-lg mb-1 mt-3">
              <div className="card p-3 shadow">
                <img src={sololeveling} alt="" />
                <h4 className="text-center">Manga Reading</h4>
                <p>
                  Manga, a Japanese comic book and graphic novel style, has many genres and themes that engage readers worldwide.
                  Manga takes me to amazing worlds with distinct characters and intriguing stories.
                  I feel many emotions and have many adventures thanks to amazing artwork and fascinating storylines.
                  Manga is a getaway and inspiration that I love, whether it's an epic battle, passionate friendships, or fantastical worlds.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3 mt-5">
              <div className="card p-1 shadow">
                <img src={onepiece} alt="" />
                <h4 className="text-center">Anime</h4>
                <p>
                  I enjoy anime simply because it brings stories to life like no other medium.
                  I may explore many worlds and feel many emotions thanks to the bright animation,
                  emotive characters, and different genres. Whether it's an action-packed combat,
                  a heartbreaking drama, or a lighter comedy, anime offers an immersive getaway and inspiration.
                  I am always amazed by anime production's ingenuity and artistry, making each series unforgettable.
                  One of the best anime is "One Piece," by Eiichiro Oda, about Monkey D. Luffy and his pirate gang searching for the One Piece.
                  This amazing voyage explores friendship, courage, and dreams.
                  According to Monkey D. Luffy, "If you don’t take risks, you can’t create a future."
                </p>
              </div>
            </div>
            <div className="col-lg mb-3 mt-3">
              <div className="card p-3 shadow">
                <img src={ml} alt="" />
                <h4 className="text-center">Online Gaming</h4>
                <p>
                  I enjoy Playing"Mobile Legends" because it combines strategy, competition, and friendship.
                  I keep going back because I love collaborating, strategizing, and outplaying opponents.
                  Each match is fresh and thrilling because to the game's diverse characters and frequent updates.
                  Teaming up with friends or meeting new players provides a social dimension to the game that boosts
                  its enjoyment. Playing "Mobile Legends" is about the trip, increasing my skills, and sharing
                  experiences with other gamers, not simply winning.
                </p>
              </div>
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

export default Home;
