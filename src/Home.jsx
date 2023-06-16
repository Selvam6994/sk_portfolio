import React from "react";
import myImage from "../src/assets/Images/Profile image/myImage-removebg-preview.png";
import { Button, Paper } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

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
          <motion.div
            className="resumeButton"
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Paper
              elevation={8}
              style={{ borderRadius: "10px", backgroundColor: "green" }}
            >
              <Button style={{ fontSize: "25px", color: "whitesmoke" }}>
                Contact Me
              </Button>
            </Paper>
          </motion.div>
        </div>
        <div className="imageSection">
          <img src={myImage} alt="Profile Image" />
        </div>
      </div>
      <div className="aboutSection">
        <Paper
          elevation={16}
          className="aboutCard"
          style={{ borderRadius: "10px" }}
        >
          <span>About Me</span>
          <p>
            Being a budding software professional in the field of IT, I am
            seeking a career as a web designer and developer to grow my skill
            set while contributing to the success of the organization.
          </p>
          <p>
            Easily inspired, I prefer to keep learning, challenge myself, and do
            interesting things that matter to me. Below is a PDF that contains
            more information about me, my biography, experience, skills,
            education, and more.
          </p>
          <motion.div
            className="resumeButton"
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Paper
              style={{
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "green",
              }}
              elevation={16}
            >
              <Button style={{ color: "whitesmoke", fontSize: "20px" }}>
                Download Pdf
              </Button>
            </Paper>
          </motion.div>
        </Paper>
      </div>
    </div>
  );
}

export default Home;
