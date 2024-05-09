import "./FeaturedP.css";
import { React, useState } from "react";
import { FeaturedPropertiesdata } from "../../data/FeaturedPropertiesdata";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";

const Col = ({ property }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = () => {
    setImgIndex((prev) => (prev === 0 ? property.image.length - 1 : prev - 1));
  };

  const nextImg = () => {
    setImgIndex((prev) => (prev === property.image.length ? 0 : prev + 1));
  };

  return (
    <div className="col">
      <div className="status">
        <a href="/">Featured</a>
        <a href="/">For sale</a>
      </div>
      <FaChevronLeft className="arr-left" onClick={prevImg} />
      <img className="image" src={property.image[imgIndex]} alt="" />
      <FaChevronRight className="arr-right" onClick={nextImg} />
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
  );
};

const FeaturedP = () => {
  return (
    <section className="images-br">
      <div className="move">
        <button>Prev</button>
        <button>Next</button>
      </div>

      <div className="card-container">
        {FeaturedPropertiesdata.map((property, index) => (
          <Col key={index} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedP;
