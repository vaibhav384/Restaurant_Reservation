import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import ScrollReveal from "scrollreveal";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "5rem",
      duration: 1700,
      reset: true,
    });

    // Apply ScrollReveal to each navbar link with delay and origin from bottom
    const navbarLinks = document.querySelectorAll(".navbar-link");
    navbarLinks.forEach((link, index) => {
      sr.reveal(link, {
        delay: 150 * index, // Delay increases with each link
        origin: "bottom",   // All links come from the bottom
      });
    });

    // Optionally, reveal the logo and hamburger menu from bottom as well
    sr.reveal(".logo", { delay: 200, origin: "bottom" });
    sr.reveal(".hamburger", { delay: 400, origin: "bottom" });
  }, []);

  return (
    <>
      <nav>
        <div className="logo">TREATS</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element, index) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
                className="navbar-link" // Add this class to target with ScrollReveal
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
