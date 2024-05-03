import React from "react";
import image from "../../assets/FeaturedPimages/house5.jpg";
import { LiaBedSolid } from "react-icons/lia";
import "./Finest.css";

const Finest = () => {
  return (
    <section className="container">

      <div className="header">
        <h1>Check Our Selection Of Finest Properties</h1>
      </div>

      <div className="card-container">
        <div className="card">
          <img src={image} alt="" />
          <div className="details">
            <p className="desc">4 Bedroom Semi detatched duplex for sale</p>
            <p className="price">100,000,000</p>
          </div>
        </div>

        <div className="card">
          <img src={image} alt="" />
          <div className="details">
            <p className="desc">4 Bedroom Semi detatched duplex for sale</p>
            <p className="price">100,000,000</p>
          </div>
        </div>

        <div className="card">
          <img src={image} alt="" />
          <div className="details">
            <p className="desc">4 Bedroom Semi detatched duplex for sale</p>
            <p className="price">100,000,000</p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Finest;
