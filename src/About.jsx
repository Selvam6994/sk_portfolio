import { Paper, useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import webImage from "../src/assets/Images/Page Images/web-design.jpg";

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
              style={changeTheme == true ? { color: "#6D8654" } : { color: "" }}
            >
              {" "}
              About Me:
            </span>
            <p>
              Easily inspired, I prefer to keep learning, challenge myself, and
              do interesting things that matter to me. Being a budding software
              professional in the field of IT, I am seeking a career as a web
              designer and developer to grow my skill set while contributing to
              the success of the organization.
            </p>
          </Paper>
          <div className="buttonSection">
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
          </div>
        </motion.div>
      ) : (
        ""
      )}
      {displayContent == true ? (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2.5,
            delay: 0.5,
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
      ) : (
        ""
      )}
    </div>
  );
}

export default About;
