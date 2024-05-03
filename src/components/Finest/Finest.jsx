import React from "react";
import { FinestProperties } from "../../data/FinestProperties";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import "./Finest.css";

const Finest = () => {

  // function RandomIndex() {
  //   let randomNumber = Math.floor(Math.random() * 5) + 1;
  //   console.log(randomNumber);
  // } 
  return (
    <section className="containr">

      <div className="header">
        <h1>Check Our Selection Of Finest Properties</h1>
      </div>

      <div className="cd-container">
        {FinestProperties.map((property, index) => {
          return (
            <div className="cd">
              <p className="featured">Featured</p>
              <div className="stat">
                <button>For sale</button>
                <button>Hot offer</button>
              </div>
              < FaChevronLeft className="ar-left" />
              <img src={property.image[0]} alt="" />
              <div className="details">
                <p className="desc">{property.desc}</p>
                <p className="price">< TbCurrencyNaira className="currency"/>{property.price}</p>
                <div style={{ display: 'flex', gap: '5px' }}>
                  < LiaBedSolid className="bed" />
                  <span>{property.nob}</span>
                </div>
              </div>
              < FaChevronRight className="ar-right" />
            </div>
          )
        })}


        {/* <div className="cd">
          < FaChevronLeft className="ar-left" />
          <img src={image} alt="" />
          <div className="details">
            <p className="desc">4 Bedroom Semi detatched duplex for sale</p>
            <p className="price">100,000,000</p>
            < LiaBedSolid className="bed" />
          </div>
          < FaChevronRight className="ar-right" />
        </div> */}

        {/* <div className="cd">
          < FaChevronLeft className="ar-left" />
          <img src={image} alt="" />
          <div className="details">
            <p className="desc">4 Bedroom Semi detatched duplex for sale</p>
            <p className="price">100,000,000</p>
            < LiaBedSolid className="bed" />
          </div>
          < FaChevronRight className="ar-right" />
        </div> */}

      </div>


    </section>
  );
};

export default Finest;
