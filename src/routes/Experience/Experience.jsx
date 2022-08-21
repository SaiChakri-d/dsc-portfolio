import React from "react";
import "./Experience.css";
import Bounce from "react-reveal";
import { useEffect } from "react";
import guvizen from "../../images/guvizen.png";

export function Experience() {
  // Here useEffect is used to apply some styles in body
  useEffect(() => {
    document.body.className = "experienceBody";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <>
      {" "}
      <div className="Experience">
        <div className="pageTitle">
          <Bounce>
            <h2>Experience</h2>
          </Bounce>
        </div>
        <div className="entries">
          <div className="entry Expentry">
            <div className="title big">Feb 2022 - Present</div>
            <div className="body ">
              <div className="ExperienceImageDiv">
                <img src={guvizen} alt="Guvi logo" className="educationImage" />
              </div>
            </div>
            <h3>Full Stack Development Program</h3>
            <p>
              GUVI-Zen Class <br />
              IITM Research Park
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
