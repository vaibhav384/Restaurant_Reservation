import React, { useEffect } from 'react';
import { data } from '../restApi.json';
import ScrollReveal from "scrollreveal";

const Qualities = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '5rem',
      duration: 2000,
      reset: true,
    });

    // Reveal the middle element from the center
    sr.reveal(".middleElement", { delay: 200, origin: "top" });
    
    // Reveal the left element from the left
    sr.reveal(".leftElement", { delay: 100, origin: "left" });
    
    // Reveal the right element from the right
    sr.reveal(".rightElement", { delay: 300, origin: "right" });
  }, []);

  return (
    <section className='qualities' id='qualities'>
      <div className="container">
        {
          data[0].ourQualities.map((element, index) => {
            const positionClass = index === 1 ? 'middleElement' : index === 0 ? 'leftElement' : 'rightElement';
            return (
              <div className={`card ${positionClass}`} key={element.id}>
                <img src={element.image} alt={element.title} />
                <p className='title'>{element.title}</p>
                <p className='description'>{element.description}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Qualities;
