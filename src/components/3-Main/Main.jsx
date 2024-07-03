import { useMemo, useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects.js";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useRef } from "react";
import copy from "copy-to-clipboard";

const Main = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const doesProjectBelongToActiveCategory = (project) => {
    if (activeCategory === "all") return true;
    return project.category.includes(activeCategory);
  };
  const projectsToShow = myProjects.filter(doesProjectBelongToActiveCategory);

  const textRef = useRef();
  //Function to add text to clipboard
  const copyToClipboard = (e) => {
    e.preventDefault();
    // Text from the html element
    // @ts-ignore
    let copyText = textRef.current.getAttribute("data-link");
    // Adding text value to clipboard using copy function
    let isCopy = copy(copyText);

    //Dispalying notification
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };
  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => handleCategoryChange("all")}
          className={activeCategory === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => handleCategoryChange("react")}
          className={activeCategory === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => handleCategoryChange("javascript")}
          className={activeCategory === "javascript" ? "active" : null}
        >
          Javascript
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {projectsToShow.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
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
                      <a
                        data-link={item.link}
                        ref={textRef}
                        onClick={copyToClipboard}
                        href="#"
                        className="icon-link"
                      ></a>
                      <a href={item.link} className="icon-github"></a>
                    </div>
                    <a className="link flex" href={item.website}>
                      website
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
