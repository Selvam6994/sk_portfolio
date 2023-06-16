import React from "react";
import myImage from "../src/assets/Images/Profile image/myImage-removebg-preview.png";
import { Paper } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="homePage">
      <div className="topImage">
        <div className="contentSection">
          <span>Hi!</span>
          <span>I'm Selva Kumar</span>
          <span>
            I{" "}
            <span>
              <TypeAnimation
                sequence={["Design", 2000, "Develop", 2000]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "35px",
                  display: "inline-block",
                  color: "green",
                }}
                repeat={Infinity}
              />{" "}
              <span>web apps.</span>
            </span>
          </span>
        </div>
        <div className="imageSection">
          <img src={myImage} alt="Profile Image" />
        </div>
      </div>
      <div className="aboutSection">
        
      </div>
    </div>
  );
}

export default Home;
