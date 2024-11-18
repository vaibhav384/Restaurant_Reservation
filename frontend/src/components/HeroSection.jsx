import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ScrollReveal from "scrollreveal";

const HeroSection = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "5rem",
      duration: 1700,
      reset: true,
    });

    sr.reveal(".del", { delay: 210, origin: "left" });
    
    sr.reveal(".foo", { delay: 440, origin: "left" });

    sr.reveal(".dis", { delay: 660, origin: "left" });

    sr.reveal(".logo", { delay: 440, origin: "bottom" });

    sr.reveal(".threeline", { delay: 440, origin: "right" });

  }, []);

  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title del">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox left">
              <img src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title title_t foo">Food</h1>
                {/* <h1 className="title dishes_title dis">Dishes</h1> */}
                <img className="threeline" src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox right">
            <img src="hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title dis">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
