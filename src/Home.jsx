import React from "react";
import { TypeAnimation } from "react-type-animation";
import myImage from "../src/assets/Images/Profile image/myImage-removebg-preview.png";
import { useMediaQuery } from "@mui/material";

function Home({ changeTheme }) {
  const resHomepage = useMediaQuery("(min-width:1140px)");
  const mobileReshomepage = useMediaQuery("(min-width:825px)");
  return (
    <div
      id="/"
      className={mobileReshomepage == true ? "homePage" : "resHomePage"}
      style={
        changeTheme == true
          ? { backgroundColor: "#1D1D1D" }
          : { backgroundColor: "" }
      }
    >
      <div
        className={mobileReshomepage == true ? "content" : "resMobileContent"}
      >
        <div
          className={
            resHomepage == true
              ? "description"
              : mobileReshomepage == true
              ? "resDescription"
              : "mobileResDescription"
          }
        >
          <span>Hi!</span>
          <span>
            {" "}
            I’m{" "}
            <span
              style={changeTheme == true ? { color: "#6D8654" } : { color: "" }}
            >
              Selvakumar
            </span>
          </span>
          <span>
            {/* typeAnimation */}I
            <span
              className={
                changeTheme == true ? "typeAnimationTheme" : "typeAnimation"
              }
            >
              {" "}
              <TypeAnimation
                sequence={["Design", 1000, "Develop", 1000]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </span>
            web apps
          </span>
        </div>
      </div>
      <div
        className={
          resHomepage == true
            ? "imageSection"
            : mobileReshomepage == true
            ? "resImageSection"
            : "mobileResImageSection"
        }
      >
        <img
          className={
            resHomepage == true
              ? "image"
              : mobileReshomepage == true
              ? "resImage"
              : "mobileResImage"
          }
          src={myImage}
          alt="SK Image"
        />
      </div>
    </div>
  );
}

export default Home;
