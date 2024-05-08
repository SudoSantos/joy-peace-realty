import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <section class="big-container">
      <div class="parts">
        <div class="one">
          <div class="content">
            <h2>Why J&P is The Perfect Choice?</h2>
            <div
              style={{
                borderBottom: "1px solid white",
                width: "40%",
                marginTop: "50px",
              }}
            ></div>
          </div>
          <div class="content">
            <h2>02</h2>
            <h2>Personalized Service</h2>
            <p>
              We believe that every client is unique, which is why we take the
              time to understand each specific needs, preferences, and goals to
              deliver a tailor-made experience.{" "}
            </p>
            <div
              style={{
                borderBottom: "1px solid white",
                width: "40%",
                marginTop: "50px",
              }}
            ></div>
          </div>

          <div class="content">
            <h2>01</h2>
            <h2>Extensive Market Knowledge</h2>
            <p>
              we stay up-to-date with the latest market trends and local
              insights, providing you with valuable information to make informed
              decisions.
            </p>
            <div
              style={{
                borderBottom: "1px solid white",
                width: "40%",
                marginTop: "50px",
              }}
            ></div>
          </div>

          <div class="content">
            <h2>03</h2>
            <h2>Strong Negotiations Skills</h2>
            <p>
              As your advocate, we are dedicated to getting you the best deal
              possible. Our expertise in negotiation ensures you receive maximum
              value, whether buying or selling
            </p>
            <div
              style={{
                borderBottom: "1px solid white",
                width: "40%",
                marginTop: "50px",
              }}
            ></div>
          </div>
        </div>

        <div class="two">
          <form action="">
            <h3 style={{ fontSize: "30px", fontWeight: "lighter" }}>
              Real Estate Inquiry Form
            </h3>
            <h4>Inquiry Type</h4>
            <select name="" class="full" id="inq-type">
              <option value="" disabled selected>
                Select
              </option>
              <option value="">Purchase</option>
              <option value="">Rent</option>
              <option value="">Sell</option>
              <option value="">Evaluation</option>
              <option value="">Mortagage</option>
            </select>
            <div class="info">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input
            className="email"
              type="text"
              placeholder="Email Address"
            />

            <h4>Location</h4>
            <div class="sprd">
              <select name="" id="" style={{ paddingLeft: "2%" }}>
                <option value="" disabled selected>
                  Select
                </option>
                <option value="">Ajah</option>
                <option value="">Ikoyi</option>
                <option value="">Lagos</option>
                <option value="">Lekki</option>
                <option value="">Mainland</option>
              </select>
              <input
                type="text"
                style={{ paddingLeft: "2%" }}
                placeholder="Zip Code"
              />
            </div>

            <h4>Property</h4>
            <select name="" class="full" id="">
              <option value="" disabled selected>
                Select Type
              </option>
              <option value="">Apartment</option>
              <option value="">Commercial</option>
              <option value="">Land</option>
              <option value="">Multi Family Home</option>
              <option value="">Office</option>
              <option value="">Residential</option>
            </select>

            <div class="info">
              <input type="text" placeholder="Max Price" />
              <input type="text" placeholder="Minimum Size Sq Feet" />
            </div>

            <div class="info">
              <input type="text" placeholder="Number of Beds" />
              <input type="text" placeholder="Number of Baths" />
            </div>

            <button type="submit" class="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
