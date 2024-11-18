import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import ScrollReveal from "scrollreveal";

const About = () => {
  
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '2rem',
      duration: 1200,
      reset: true,
    });

    // Reveal each card with different delay and origin
    sr.reveal(".banner .heading", { delay: 170, origin: "bottom" });
    sr.reveal(".banner .mid", { delay: 170, origin: "bottom" });

  }, []);

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading fade-in">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid fade-in">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident possimus optio adipisci dolores impedit illum iusto
              perferendis, laudantium quod accusamus consequuntur consectetur,
              tempore nulla error iure reiciendis dolorem assumenda.
              Necessitatibus fugit asperiores totam rem esse exercitationem
              iusto ipsum qui dolore ex, accusantium repellat mollitia
              repellendus.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" style={{
              animation: "rotate 26s linear infinite",
            }}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
