import "./FeaturedP.css";

import { React, useState } from 'react';

import { FeaturedPropertiesdata } from "../../data/FeaturedPropertiesdata";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import { TbCurrencyNaira } from "react-icons/tb";

import { FaRegHeart } from "react-icons/fa6";

import { BsArrowsAngleExpand } from "react-icons/bs";

import { IoAddCircleOutline } from "react-icons/io5";

import { LiaBedSolid } from "react-icons/lia";

const FeaturedP = () => {
  const [imageIndex, setImageIndex] = useState({});

  const handlePrevClick = (index) => {
    setImageIndex((prevIndex) => ({
      ...prevIndex,
      [index]: prevIndex[index] - 1,
    }));
  };

  const handleNextClick = (index) => {
    setImageIndex((prevIndex) => ({
      ...prevIndex,
      [index]: prevIndex[index] + 1,
    }));
  };

  return (
    <section className="images-br">
      <div className="move">
        <button>Prev</button>

        <button>Next</button>
      </div>

      <div className="card-container">
        {FeaturedPropertiesdata.map((property, index) => (
          <div className="col" key={index}>
            <div className="status">
              <a href="/">Featured</a>

              <a href="/">For sale</a>
            </div>

            <FaChevronLeft
              className="arr-left"
              onClick={() => handlePrevClick(index)}
            />

            <img
              className="image"
              src={property.image[imageIndex[index] || 0]}
              alt=""
            />

            <FaChevronRight
              className="arr-right"
              onClick={() => handleNextClick(index)}
            />

            <div className="plus">
              <p>
                <TbCurrencyNaira className="naira" />

                {property.price}
              </p>

              <div>
                <button>
                  <BsArrowsAngleExpand className="icon" />
                </button>

                <button>
                  <FaRegHeart className="icon" />
                </button>

                <button>
                  <IoAddCircleOutline className="icon" />
                </button>
              </div>
            </div>

            <h4>{property.desc}</h4>

            <p className="location">{property.location}</p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <LiaBedSolid className="bedIcon" />

              <p className="num">{property.nob}</p>
            </div>

            <p className="num">{property.type}</p>

            <div className="short-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedP;
