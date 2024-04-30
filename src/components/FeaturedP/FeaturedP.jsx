import React, { useState } from "react";
import "./FeaturedP.css";
import { FeaturedPropertiesdata } from "../../data/FeaturedPropertiesdata";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";

const FeaturedP = () => {
  const [image, setImage] = useState(0);
  const imageLength = FeaturedPropertiesdata.map(
    (property, index) => property.image.length
  );

  //   const nextImage = () => {
  //     setImage((prev) => prev);
  //   };

  //   const prevImage = () => {

  //   };

  return (
    <section className="images-br">
      {FeaturedPropertiesdata.map((property, index) => {
        return (
          <div className="col">
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
            <img src={property.image[0]} alt="" />
            {/* <div className="plus">
              <p></p>
              <a href="/"></a>
              <a href="/"></a>
              <a href="/"></a>
            </div> */}
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
        );
      })}
    </section>
  );
};

export default FeaturedP;
