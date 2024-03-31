import { Paper, useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import webImage from "../src/assets/Images/Page Images/web-design.jpg";
import resume from "/resume/Selvakumar CV.pdf";
function About({ changeTheme, displayContent }) {
  const mobileResAboutpage = useMediaQuery("(min-width:755px)");
  const resAboutTextSection = useMediaQuery("(min-width:1320px)");
  return (
    <div
      className={mobileResAboutpage == true ? "aboutPage" : "resAboutPage"}
      id="about"
      style={
        changeTheme == true
          ? { backgroundColor: "#1D1D1D" }
          : { backgroundColor: "" }
      }
    >
      {displayContent == true ? (
        <>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2.5,
              delay: 0.5,
            }}
            className={
              mobileResAboutpage == true
                ? "aboutTextSection"
                : "resAboutTextSection"
            }
          >
            {/* aboutTextArea */}
            <Paper
              elevation={16}
              className={
                resAboutTextSection == true
                  ? "aboutTextArea"
                  : mobileResAboutpage == true
                  ? "aboutResTextArea"
                  : "resAboutTextArea"
              }
              style={
                changeTheme == true
                  ? {
                      backgroundColor: "rgba(225,225,225,0.1)",
                      borderRadius: "20px",
                    }
                  : { backgroundColor: "rgba(0,0,0,0)", borderRadius: "20px" }
              }
            >
              <span
                style={
                  changeTheme == true ? { color: "#6D8654" } : { color: "" }
                }
              >
                {" "}
                About Me:
              </span>
              <p>
                A budding software professional in the field of IT, I am
                interested in developing my skills as a web designer and
                developer to expand my skill set while contributing to the
                organization's success. I am easily inspired, and I like to keep
                learning, challenge myself, and do interesting things that
                matter to me.
              </p>
            </Paper>
            <div className="buttonSection">
              <motion.div
                className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
                  target="blank"
                >
                  <Paper
                    elevation={16}
                    style={
                      changeTheme == true
                        ? { backgroundColor: "#E9C893" }
                        : { backgroundColor: "#987862", color: "#1E392A" }
                    }
                  >
                    <Button style={{ color: "#1E392A" }}>Contact Me</Button>
                  </Paper>
                </a>
              </motion.div>
              <motion.div
                className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a href="https://drive.google.com/file/d/1PSWSwpcBJiRvRfjOyv-ZvVfIGIOMi9rA/view?usp=drive_link" target="blank">
                  <Paper
                    elevation={16}
                    style={
                      changeTheme == true
                        ? { backgroundColor: "#E9C893" }
                        : { backgroundColor: "#987862", color: "#1E392A" }
                    }
                  >
                    <Button style={{ color: "#1E392A" }}>My Resume</Button>
                  </Paper>
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 50,
                restDelta: 0.001,
              },
            }}
            className={
              mobileResAboutpage == true
                ? "aboutImageSection"
                : "resAboutImageSection"
            }
          >
            <img
              className={
                mobileResAboutpage == true
                  ? "aboutPageImage"
                  : "resAboutPageImage"
              }
              src={webImage}
              alt="image"
              style={
                changeTheme == true
                  ? { border: "5px solid #6D8654" }
                  : { border: "" }
              }
            />
          </motion.div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default About;
