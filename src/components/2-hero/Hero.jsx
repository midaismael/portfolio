import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./mida-pic.jpeg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Front-End Developer | React Js,and Communication and Electronics
          Engineering
        </h1>
        <p className="subtitle">
          Front-end Developer specializing in React.js, with a degree in
          Communication and Electronics Engineering, graduated in
          2024.Proficient in operating systems such as Linux and Windows.
          Skilled in web technologies including HTML, CSS, JavaScript, and
          React.js. Passionate about creating seamless user experiences and
          bringing innovative ideas to life. I have also completed numerous
          projects as examples of my work.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  );
};
export default Hero;
