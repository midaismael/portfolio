import "./main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">all projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Node & Express</button>
      </section>
      <section className="right-section flex">
        {["aa", "bb", "cc", 1 , 2].map((item) => {
          return (
            <article key={item} className="card">
              <img width={220} src="./dorsin-bg.png" alt="" />
              <div style={{ width: "220px" }} className="box">
                <h1 className="title">Landing-page-dorsin</h1>
                <p className="subtitle">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
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
            </article>
          );
        })}
      </section>
    </main>
  );
};
export default Main;
