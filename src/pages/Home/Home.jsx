import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import loading_video from "../../assets/video.mp4";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3510); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="home">
    <div className={`loading-overlay ${!loading ? 'hidden' : ''}`}>
      <video
        src={loading_video}
        autoPlay
        muted
        loop
        className="loading-video"
      />
    </div>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
          A notorious gang in 1919 Birmingham, England, 
          is led by the fierce Tommy Shelby, a crime boss 
          set on moving up in the world no matter the cost.
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More info
            </button>
          </div>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movie"} category={"top_rated"} />
      <TitleCards title={"Only on Netflix"} category={"popular"} />
      <TitleCards title={"Upcoming"} category={"upcoming"} />
      <TitleCards title={"Top Pics for you"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
