import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        At Tech Store, we have the widest selection of consumer electonics on
        the Web. We have it all from the lastest and greatest smartphones to the
        beefiest gaming PCs and all points inbetween! You can also check us out
        on all social media platforms linked below!
      </p>
      <div className="social-media-div">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-youtube"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-github"></i>
      </div>
    </div>
  );
};

export default AboutPage;
