import React, { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { LiaBedSolid } from "react-icons/lia";
import { FinestProperties } from "../../data/FinestProperties";
import "./Finest.css";

const Card = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? property.image.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === property.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="cd">
      <p className="featured">Featured</p>
      <div className="stat">
        <button>For sale</button>
        <button>Hot offer</button>
      </div>
      <FaChevronLeft className="ar-left" onClick={handleLeftArrowClick} />
      <img src={property.image[currentIndex]} alt="" />
      <div className="details">
        <p className="desc">{property.desc}</p>
        <p className="price">
          <TbCurrencyNaira className="currency" />
          {property.price}
        </p>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <LiaBedSolid className="bed" />
          <span>{property.nob}</span>
        </div>
      </div>
      <FaChevronRight className="ar-right" onClick={handleRightArrowClick} />
    </div>
  );
};

const Finest = () => {
  return (
    <section className="containr">
      <div className="header">
        <h1>Check Our Selection Of Finest Properties</h1>
      </div>

      <div className="cd-container">
        {FinestProperties.map((property, index) => (
          <Card key={index} property={property} />
        ))}
      </div>

      <div className="ldmr">
        <button>Load More</button>
      </div>
    </section>
  );
};

export default Finest;
