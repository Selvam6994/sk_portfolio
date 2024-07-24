import React from "react";
import MongoDB from "../src/assets/Images/Icons/MongoDB.png";
import ExpressJS from "../src/assets/Images/Icons/Express.png";
import NodeJS from "../src/assets/Images/Icons/Node JS.png";
import JS from "../src/assets/Images/Icons/Java Script.png";
import HTML from "../src/assets/Images/Icons/html.png";
import CSS from "../src/assets/Images/Icons/css.png";
import Figma from "../src/assets/Images/Icons/Figma.png";
import Bootstrap from "../src/assets/Images/Icons/Boot Strap.png";
import react from "../src/assets/Images/Icons/React.png";
import { Paper } from "@mui/material";
import { motion } from "framer-motion";

function Expertise({ changeTheme, displayContent }) {
  const expertiseImages = [
    {
      name: "MongoDB",
      image: MongoDB,
      delay: "0.2",
    },
    {
      name: "ExpressJS",
      image: ExpressJS,
      delay: "0.4",
    },
    {
      name: "React",
      image: react,
      delay: "0.6",
    },
    {
      name: "NodeJS",
      image: NodeJS,
      delay: "0.8",
    },
    {
      name: "JavaScript",
      image: JS,
      delay: "1",
    },
    {
      name: "HTML",
      image: HTML,
      delay: "1.2",
    },
    {
      name: "CSS",
      image: CSS,
      delay: "1.4",
    },
    {
      name: "Figma",
      image: Figma,
      delay: "1.6",
    },
    {
      name: "Bootstrap",
      image: Bootstrap,
      delay: "1.8",
    },
  ];
  return (
    <div
      className="expertisePage"
      id="expertise"
      style={
        changeTheme == true
          ? { backgroundColor: "#1D1D1D" }
          : { backgroundColor: "" }
      }
    >
      <div className="expertisePageContent">
        <div className="expertiseTitle">
          <span
            style={changeTheme == true ? { color: "#6D8654" } : { color: "" }}
          >
            Expertise
          </span>
        </div>
        <div className="expertiseImageSection">
          {expertiseImages.map((skills,index) =>
            displayContent == true ? (
              <motion.div key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 2.5,
                  delay: skills.delay,
                }}
              >
                <Paper
                  elevation={16}
                  style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                >
                  <img src={skills.image} alt={skills.name} />
                </Paper>
                <div className="titles">
                  <span
                    style={
                      changeTheme == true ? { color: "#6D8654" } : { color: "" }
                    }
                  >
                    {skills.name}
                  </span>
                </div>
              </motion.div>
            ) : (
              null
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
