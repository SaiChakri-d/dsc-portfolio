import React from "react";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const styles = {
  helloStyle: {
    fontSize: "2em",
  },
  nameStyle: {
    marginTop: "none",
    fontSize: "4em",
  },
  inlineChild: {
    display: "inline-block",
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

function Home() {
  return (
    <>
      <Fade>
        <div style={styles.mainContainer}>
          {/* <h3 style={styles.helloStyle}>Hi..!</h3> */}
          <h1 style={styles.nameStyle}>Sai Chakri D</h1>
          <div style={{ flexDirection: "row" }}>
            <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: "< Full Stack Developer />",
              }}
            />
            <h2>
              I specialize in developing and deploying responsive
              <br /> websites and web applications
            </h2>
          </div>
          <div className="social">
            {/* LinkedIn  */}
            <i
              className="fa-brands fa-linkedin socialIcons"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sai-chakri-d-9190121b3/",
                  "_blank"
                )
              }
            />
            {/* Github links */}
            <i
              className="fa-brands fa-github socialIcons"
              onClick={() =>
                window.open("https://github.com/SaiChakri-d", "_blank")
              }
            />
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Home;
