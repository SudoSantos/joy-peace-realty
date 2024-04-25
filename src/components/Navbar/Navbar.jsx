import React from "react";
import { propertyTypedata } from "../../data/propertyTypedata";
import { cities } from "../../data/propertyTypedata";
import { Bedrooms } from "../../data/propertyTypedata";
import "./Navbar.css";
import joypeaceLogo from "../../assets/joyPeacelogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <div>
          <img src={ joypeaceLogo } alt="" />
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/">Inquiry Form</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
        </div>
      </div>

      <div className="text-box">
        <h1>Welcome to J&P Realty</h1>
        <p>
          Your premier destination for all your real estate needs. Whether you
          are searching
          <br /> for a cozy apartment in the heart of the city or a spacious
          family home in a <br /> peaceful suburb, we have something for Our
          listings are regularly
          <br /> updated, ensuring that you have access to the latest properties
          on the market.
        </p>
      </div>

      <div className="search-eng">
        <select name="" id="">
          <option disabled selected value="">
            Property-Type
          </option>
          {propertyTypedata.map((property, index) => {
            return <option value="">{property.type}</option>;
          })}

          {/* <option value="">Commercial</option>
          <option value="">Land</option> */}
        </select>

        <select name="" id="">
          <option disabled selected value="">
            All Cities
          </option>
          {cities.map((city, index) => {
            return <option value="">{city.city}</option>;
          })}
        </select>

        <select name="" id="">
          <option disabled selected value="">
            Bedrooms
          </option>
          {Bedrooms.map((Bedroom, index) => {
            return <option id={Bedroom.index} value={Bedroom.index}>{Bedroom.rooms}</option>;
          })}
        </select>

        <input type="number" placeholder="Max-Budget" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
