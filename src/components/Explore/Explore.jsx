import React from "react";
import "./Explore.css";
import explore1 from "../../assets/explore1.jpg";
import explore2 from "../../assets/explore2.jpg";
import explore3 from "../../assets/explore3.jpg";
import explore4 from "../../assets/explore4.jpg";

const Explore = () => {
  return (
    <section className="ln-img">
      
      <div className="text-cntr">
          <h3>Explore The City</h3>
          <p>
            Embark on a Journey of Blissful Living with Joy Peace Realty's
            Serene Properties and Tranquil Atmosphere.
          </p>
      </div>

      <div className="image-cntr">
        <img src={explore1} alt="" />
      </div>

      <div className="image-cntr">
        <img src={explore2} alt="" />
      </div>

      <div className="image-cntr">
        <img src={explore3} alt="" />
      </div>

      <div className="image-cntr">
        <img src={explore4} alt="" />
      </div>
    </section>
  );
};

export default Explore;
