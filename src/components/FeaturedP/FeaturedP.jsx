import React, { useState } from "react";
import "./FeaturedP.css";
import { FeaturedPropertiesdata } from "../../data/FeaturedPropertiesdata";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";

const FeaturedP = () => {
  const [image, setImage] = useState(0);
  const imageLength = FeaturedPropertiesdata.map(
    (property, index) => property.image.length
  );

  return (
    <section className="images-br">
      <div className="move">
        <button>Prev</button>
        <button>Next</button>
      </div>
      <div className="card-container">
        {FeaturedPropertiesdata.map((property, index) => {
          return (
            <div className="col" key={index}>
              <div className="status">
                <a href="/">Featured</a>
                <a href="/">For sale</a>
              </div>
              <FaChevronLeft
                className="arr-left"
                onClick={() => {
                  image === 0
                    ? setImage(imageLength - 1)
                    : setImage((prev) => prev - 1);
                }}
              />
              <img className='image' src={property.image[0]} alt="" />
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
              <FaChevronRight
                className="arr-right"
                onClick={() => {
                  image === imageLength - 1
                    ? setImage(0)
                    : setImage((prev) => prev + 1);
                }}
              />
            </div>
            // <div className="card" key={index}>
            //   <div>block</div>
            // </div>
          );
        })}
      </div>
    </section>
  );
};

export 
default FeaturedP;