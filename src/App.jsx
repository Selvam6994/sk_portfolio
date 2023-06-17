import "./App.css";
import Home from "./Home";
import { IconButton, Paper, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import logo from "./assets/Images/Logo/selvam logo.png";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Skills from "./Skills";

function App() {
  const [transition, setTransition] = useState(0);

  const scroll = () => {
    if (window.scrollY >= 500) {
      setTransition(true);
    } else if (window.scrollY <= 700) {
      setTransition(false);
    }
  };

  window.addEventListener("scroll", scroll);

  console.log(window.scrollY);
  const navOptions = [
    {
      name: "Home",
      link: "home",
      transDelay: "0.2",
    },
    {
      name: "Skills",
      link: "skills",
      transDelay: "0.5",
    },
    {
      name: "Projects",
      link: "project",
      transDelay: "0.8",
    },
    {
      name: "Contact",
      link: "contact_me",
      transDelay: "1.2",
    },
  ];

  const navbarWidth = useMediaQuery("(min-width:970px)");

  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <Paper
        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
        elevation={8}
        className="navBar"
      >
        <motion.div
          className="logoSection"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div>
            <img src={logo} alt="SK" />
          </div>
        </motion.div>
        {navbarWidth == true ? (
          <div className="optionsSection">
            {navOptions.map((options) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: options.transDelay,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a
                    href={`#${options.link}`}
                    className="nav-link scrollto"
                    onClick={() => setParams(options.link)}
                  >
                    <Paper elevation={8}>
                      <Button
                        className="navOptions"
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "20px",
                          transition: "1s",
                        }}
                        variant="text"
                        color="success"
                      >
                        {options.name}
                      </Button>
                    </Paper>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="responsiveNavOptions">
            <div className="menuButtonSection">
              {dropDown == false ? (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Paper elevation={6}>
                    <IconButton onClick={() => setDropDown(true)}>
                      <MenuIcon />
                    </IconButton>
                  </Paper>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Paper elevation={6}>
                    <IconButton onClick={() => setDropDown(false)}>
                      <MenuOpenIcon />
                    </IconButton>
                  </Paper>
                </motion.div>
              )}
            </div>
            {dropDown == true ? (
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 90,
                    restDelta: 0.001,
                  },
                }}
              >
                <Paper elevation={8}>
                  <div className="menuOptionsSection">
                    {navOptions.map((options) => (
                      <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: options.transDelay,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <Paper
                            elevation={6}
                            style={{ margin: "10px 0 10px 0" }}
                          >
                            <Button
                              className="menuOptions"
                              style={{
                                fontFamily: "Poppins",
                                fontSize: "20px",
                                transition: "1s",
                                width: "120px",
                              }}
                              variant="text"
                              color="success"
                            >
                              {options.name}
                            </Button>
                          </Paper>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </Paper>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        )}
      </Paper>

      <Home></Home>
      <Skills displaySkills={transition}></Skills>
    </div>
  );
}

export default App;