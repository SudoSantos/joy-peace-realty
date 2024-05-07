import React from "react";
import { Testimonialsdata } from "../../data/Testimonialsdata";
import "./Testimonials.css";
import "../Agents/Agents.css";

const Testimonials = () => {
  return (
    <section className="testimonialz">
      <h2 className="">Testimonials</h2>

      <div className="testimonials">
        {Testimonialsdata.map((testifier, index) => {
          return (
            <div className="testifier">
              <p>{testifier.remark}</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={testifier.image} alt="" />
                <p>
                  by{" "}
                  <span style={{ fontWeight: "bold" }}>{testifier.name}</span>{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
