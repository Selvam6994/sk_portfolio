import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Expertise from "./Expertise";
import Home from "./Home";
import Work from "./Work";
import { Button, Paper, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
  const navBottons = [
    {
      name: "Home",
      transDelay: 0.2,
      linkTo: "/",
    },
    {
      name: "About",
      transDelay: 0.4,
      linkTo: "about",
    },
    {
      name: "Expertise",
      transDelay: 0.6,
      linkTo: "expertise",
    },
    {
      name: "Work",
      transDelay: 0.8,
      linkTo: "work",
    },
    {
      name: "Contact",
      transDelay: 1,
      linkTo: "contact",
    },
  ];

  const resNavbar = useMediaQuery("(min-width:1360px)");
  const mobileResNavBar = useMediaQuery("(min-width:900px)");

  const scrollforAboutPage = () => {
    if (window.scrollY >= 600) {
      setaboutTransition(true);
    } else if (window.scrollY <= 100) {
      setaboutTransition(false);
    }
  };

  const scrollforExpertise = () => {
    if (window.scrollY >= 1000) {
      setexpertiseTransition(true);
    } else if (window.scrollY <= 1000) {
      setexpertiseTransition(false);
    }
  };

  window.addEventListener("scroll", scrollforAboutPage);
  window.addEventListener("scroll", scrollforExpertise);

  const [dropDown, setDropDown] = useState(false);
  const [theme, setTheme] = useState(false);
  const [aboutTransition, setaboutTransition] = useState(false);
  const [expertiseTransition, setexpertiseTransition] = useState(false);

  return (
    <div>
      <div
        className={
          mobileResNavBar == true ? "navBarSection" : "resMobileNavBarSection"
        }
      >
        {mobileResNavBar == true ? (
          <Paper
            className={resNavbar == true ? "navBar" : "resNavBar"}
            style={
              theme != true
                ? { backgroundColor: "#C9B7A7" }
                : { backgroundColor: "#E9C893" }
            }
            elevation={8}
          >
            {navBottons.map((options) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Paper elevation={8} style={{ backgroundColor: "#987862" }}>
                  <a href={`#${options.linkTo} `} className="nav-link scrollto">
                    <Button
                      className={resNavbar == true ? "resButtons" : "buttons"}
                      style={
                        resNavbar == true
                          ? {
                              fontSize: "18px",
                              fontFamily: "Poppins",
                              color: "#1E392A",
                            }
                          : {
                              fontSize: "15px",
                              fontFamily: "Poppins",
                              color: "#1E392A",
                            }
                      }
                    >
                      {options.name}
                    </Button>
                  </a>
                </Paper>
              </motion.div>
            ))}
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Paper
                elevation={8}
                className="themeButton"
                style={{ backgroundColor: "#987862" }}
              >
                {theme != true ? (
                  <IconButton onClick={() => setTheme(true)}>
                    <DarkModeIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setTheme(false)}>
                    <LightModeIcon />
                  </IconButton>
                )}
              </Paper>
            </motion.div>
          </Paper>
        ) : (
          <div
            style={{
              display: "flex",
              padding: "20px",
              gap: "1rem",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Paper elevation={8}>
                {dropDown == false ? (
                  <IconButton
                    onClick={() => setDropDown(true)}
                    aria-label="menu"
                    size="large"
                  >
                    <MenuIcon fontSize="inherit" />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => setDropDown(false)}
                    aria-label="menu open"
                    size="large"
                  >
                    <MenuOpenIcon fontSize="inherit" />
                  </IconButton>
                )}
              </Paper>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Paper
                elevation={8}
                className="themeButton"
                style={{ backgroundColor: "#987862" }}
              >
                {theme != true ? (
                  <IconButton onClick={() => setTheme(true)}>
                    <DarkModeIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setTheme(false)}>
                    <LightModeIcon />
                  </IconButton>
                )}
              </Paper>
            </motion.div>
          </div>
        )}

        {dropDown == true ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Paper
              elevation={8}
              className="dropDown"
              onBlur={() => setDropDown(false)}
            >
              {navBottons.map((options) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: options.transDelay,
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <a
                      href={`#${options.linkTo} `}
                      className="nav-link scrollto"
                    >
                      <Button>
                        {" "}
                        <Paper elevation={4} className="dropDownOption">
                          {options.name}
                        </Paper>
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </Paper>
          </motion.div>
        ) : (
          ""
        )}
      </div>
      <div className="pageSection">
        <Home changeTheme={theme}></Home>
        <About displayContent={aboutTransition} changeTheme={theme}></About>
        <Expertise
          displayContent={expertiseTransition}
          changeTheme={theme}
        ></Expertise>
        <Work changeTheme={theme}></Work>
        <Contact changeTheme={theme}></Contact>
      </div>
    </div>
  );
}

export default App;
