import React from "react";
import projectImage from "../src/assets/Images/Logo/MechnoImage.jpg";
import { Button, Paper, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
function Work({ changeTheme }) {
  const workPage1000px = useMediaQuery("(min-width:1200px)");
  const resWorkPage = useMediaQuery("(min-width:900px)");
  const aboutWork = [
    {
      name: "Visit",
      linkTo: "http://mechnodreamindustry.com/",
    },
    {
      name: "Front End",
      linkTo: "https://github.com/Selvam6994/mechno_clientside_update",
    },
    {
      name: "Back End",
      linkTo: "https://github.com/Selvam6994/mechno-apis",
    },
  ];

  return (
    <div
      className={resWorkPage == true ? "workPage" : "workPage900px"}
      id="work"
      style={
        changeTheme == true
          ? { backgroundColor: "#1D1D1D" }
          : { backgroundColor: "" }
      }
    >
      <div className="workImageSection">
        <div
          className={workPage1000px == true ? "myWork" : "myWorkRes1200px"}
          style={changeTheme == true ? { color: "#6D8654" } : { color: "" }}
        >
          My Work:
        </div>
        <Paper
          elevation={16}
          className={
            resWorkPage == true ? "myWorkImagePaper" : "resMyWorkImagePaper"
          }
          style={{ borderRadius: "20px" }}
        >
          <img className={"myWorkImage"} src={projectImage} alt="" />
        </Paper>
      </div>
      <div className={resWorkPage == true ? "aboutWork" : "resAboutWork"}>
        <span
          style={changeTheme == true ? { color: "#6D8654" } : { color: "" }}
        >
          Mechno Dream Industry
        </span>
        <p>
          By designing a website for this organization, I was able to help them
          grow their business online.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {aboutWork.map((buttonFunction) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href={buttonFunction.linkTo}
                target="blank"
                style={{ textDecoration: "none" }}
              >
                <Paper
                  elevation={8}
                  className="visitWork"
                  style={
                    changeTheme == true
                      ? { backgroundColor: "#E9C893" }
                      : { backgroundColor: "#C9B7A7" }
                  }
                >
                  <Button>{buttonFunction.name}</Button>
                </Paper>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
