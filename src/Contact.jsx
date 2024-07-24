import React from "react";
import contactImage from "../src/assets/Images/Page Images/Contact page image.jpg";
import emailIcon from "../src/assets/Images/Icons/gmail.png";
import phoneIcon from "../src/assets/Images/Icons/phone.png";
import whatsAppIcon from "../src/assets/Images/Icons/whatsapp.png";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import gitHub from "../src/assets/Images/Icons/github.png";
import linkedIn from "../src/assets/Images/Icons/linkedin.png";

function Contact({ changeTheme }) {
  const contactText = [
    {
      title: "Email:",
      description: "selvamyoor@gmail.com",
      icon: emailIcon,
    },
    {
      title: "Call:",
      description: "+91 8111033297",
      icon: phoneIcon,
    },
    {
      title: "Whatsapp:",
      description: "+91 9790905989",
      icon: whatsAppIcon,
    },
  ];

  const socialMedia = [
    {
      image: gitHub,
      link: "https://github.com/Selvam6994?tab=repositories",
    },
    {
      image: linkedIn,
      link: "https://www.linkedin.com/in/s-selvam-17b141240/",
    },
  ];

  const mobileResContact = useMediaQuery("(min-width:825px)");
  const mobileResContactSection = useMediaQuery("(min-width:1400px)");
  const mobileResContactDetails = useMediaQuery("(min-width:580px)");
  return (
    <div
      className="contactPage"
      id="contact"
      style={
        changeTheme == true
          ? { backgroundColor: "#1D1D1D" }
          : { backgroundColor: "" }
      }
    >
      <div
        className={
          mobileResContactSection == true
            ? "contactImageSection"
            : "resContactImageSection"
        }
      >
        <img
          src={contactImage}
          alt="Contact Image"
          style={
            changeTheme == true
              ? { border: "5px solid #6D8654" }
              : { border: "" }
          }
        />
      </div>
      <div className="contactSection">
        {contactText.map((details,index) => (
          <div className="contactDescription" key={index}>
            <div
              className={
                mobileResContactDetails == true
                  ? "iconSection"
                  : "resIconSection"
              }
            >
              <img src={details.icon} alt="icons" />
            </div>
            <div
              className={
                mobileResContactDetails == true ? "textArea" : "resTextArea"
              }
            >
              <span
                style={
                  changeTheme == true ? { color: "#6D8654" } : { color: "" }
                }
              >
                {details.title}
              </span>
              <span>{details.description}</span>
            </div>
          </div>
        ))}
        {socialMedia.map((media,index) => (
          <motion.div key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href={media.link} target="blank">
              <img
                className={
                  mobileResContact == true ? "mediaImage" : "resMediaImage"
                }
                src={media.image}
                alt="github"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
