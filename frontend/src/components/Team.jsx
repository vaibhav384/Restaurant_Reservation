import React, { useEffect } from "react";
import { data } from "../restApi.json";
import ScrollReveal from "scrollreveal";

const Team = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '5rem',
      duration: 2000,
      reset: true,
    });

    // Reveal each card with different delay and origin
    // sr.reveal(".team .card", { delay: 170, origin: "left" });

    const teamCards = document.querySelectorAll(".team .card");
    teamCards.forEach((card, index) => {
      sr.reveal(card, {
        delay: 170 * index,  // Delay increases with each card
        origin: "left",    // All cards come from the bottom
      });
    });
  }, []);

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
