import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.instagram.com/amandwivedi07" target="__blank">
          Aman Dwivedi
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/amandwivedi07" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/amandwivedi07" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/amandwivedi0007" target="__blank">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
