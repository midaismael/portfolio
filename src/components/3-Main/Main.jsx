import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects.js";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return zzz === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type: "spring", damping: 8 , stiffness : 50}}
                key={item.imgPath}
                className="card"
              >
                <img width={220} src={item.imgPath} alt="" />
                <div style={{ width: "220px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="subtitle">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
                    <a href="" className="link flex">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};
export default Main;
