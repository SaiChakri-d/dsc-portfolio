import React from "react";
import "./Education.css";
import Bounce from "react-reveal";
import { useEffect } from "react";

export function Education() {
  // Here useEffect is used to apply some styles in body
  useEffect(() => {
    document.body.className = "educationBody";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <>
      {" "}
      <div className="Education">
        <div className="pageTitle">
          <Bounce>
            <h2>Education</h2>
          </Bounce>
        </div>
        <div className="entries">
          <div className="entry">
            <div className="title big">2018-21</div>
            <h2>BE in Telecommunication Engineering</h2>
            <div className="body ">
              <div className="educationImageDiv">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/d/d2/R.V._College_of_Engineering_logo.png"
                  alt="RVCE logo"
                  className="educationImage"
                />
              </div>
              <p>
                RV College of Engineering
                <br /> Bengaluru, Karnataka <br />
                CPGA : 6.63
              </p>
            </div>
          </div>
          <div className="entry Diploma">
            <div className="title big">2015-18</div>
            <h2>Diploma in Electronics and Communication Engineering</h2>
            <div className="body">
              <div className="educationImageDiv">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cfNzW6jMYzk_rDjaI3RsMtKQpP9z5fD6FEY3moVB0HK_qEPdJ5_P6QyIzLb2GaSXG_c&usqp=CAU"
                  alt="EWIP logo"
                  className="educationImage"
                />
              </div>
              <p>
                East West Institute of Polytechnic <br /> Bengaluru, Karnataka{" "}
                <br /> Score : 81.5 %
              </p>
            </div>
          </div>

          <div className="entry School">
            <div className="title">2015</div>
            <h2>10th standard</h2>
            <div className="body">
              <p>
                Govt High School <br /> Kuppam, Andhra Pradesh <br /> GPA : 8.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
