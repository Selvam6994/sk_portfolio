import React from "react";
import myImage from "../src/assets/Images/Profile image/myImage-removebg-preview.png";
import { Button, Paper, useMediaQuery } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";

function Home() {
  const responsiveHomePage= useMediaQuery('(min-width:1205px)')
  return (
    <div className="homePage" id="home">
      <div className={responsiveHomePage==true?"topImage":"resposiveTopImage"}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2.5, delay: 0.5 }}
        >
          <div className={responsiveHomePage==true?"contentSection":"responsiveContentSection"}>
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
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
                  target="blank"
                >
                  <Button style={{ fontSize: "25px", color: "whitesmoke" }}>
                    Contact Me
                  </Button>
                </a>
              </Paper>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2.5, delay: 0.5 }}
        >
          <div className={responsiveHomePage==true?"imageSection":"responsiveImageSection"}>
            <img src={myImage} alt="Profile Image" />
          </div>
        </motion.div>
      </div>
      <div className="aboutSection">
        <motion.div
          className="aboutCard"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2, delay: 0.5 }}
        >
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
              Easily inspired, I prefer to keep learning, challenge myself, and
              do interesting things that matter to me. Below is a PDF that
              contains more information about me, my biography, experience,
              skills, education, and more.
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
                <a
                  id="download"
                  href="../src/assets/resume/My resume.pdf"
                  download
                >
                  <Button style={{ color: "whitesmoke", fontSize: "20px" }}>
                    <DownloadIcon /> Resume
                  </Button>
                </a>
              </Paper>
            </motion.div>
          </Paper>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
