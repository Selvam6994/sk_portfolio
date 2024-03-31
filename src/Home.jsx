import React from "react";
import { TypeAnimation } from "react-type-animation";
import myImage from "../src/assets/Images/Profile image/myImage-removebg-preview.png";
import { Button, Paper, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import gitHub from "../src/assets/Images/Icons/github.png";
import linkedIn from "../src/assets/Images/Icons/linkedin.png";
function Home({ changeTheme }) {
  const resHomepage = useMediaQuery("(min-width:1140px)");
  const mobileReshomepage = useMediaQuery("(min-width:825px)");

  const socialMedia = [
    {
      image: gitHub,
      link: "https://github.com/Selvam6994",
    },
    {
      image: linkedIn,
      link: "https://www.linkedin.com/in/selva-kumar-17b141240/",
    },
  ];
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
            I{" "}
            <span
              className={
                changeTheme == true ? "typeAnimationTheme" : "typeAnimation"
              }
            >
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
        <div
          className={
            mobileReshomepage == true
              ? "socialIconSection"
              : "resSocialIconSection"
          }
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <Paper
                elevation={8}
                className="contactMe"
                style={
                  changeTheme != true
                    ? { backgroundColor: "#C9B7A7" }
                    : { backgroundColor: "#E9C893" }
                }
              >
                <Button style={{ color: "#1E392A" }}>Contact Me</Button>
              </Paper>
            </a>
          </motion.div>
          {socialMedia.map((media) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href={media.link} target="blank">
                <img
                  className={
                    mobileReshomepage == true ? "mediaImage" : "resMediaImage"
                  }
                  src={media.image}
                  alt="github"
                />
              </a>
            </motion.div>
          ))}
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
