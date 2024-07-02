import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animations/frontend.json";
import { motion } from "framer-motion";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.2)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./mida-pic.jpeg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Front-End Developer | React Js,and Communication and Electronics
          Engineering
        </motion.h1>

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
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};
export default Hero;
