import "./Projects.css";
import { Button } from "@mui/material";
import github from "../../images/github.png";
import FormHelperText from "@mui/material/FormHelperText";
import { projectData } from "./DataProject";

export default function Projects() {
  return (
    <>
      <div className="fulDiv">
        <h1>Projects</h1>
        <div className="projectMainDiv">
          {projectData.map((data) => (
            <div className="projectCard">
              <h2>{data.title} </h2>
              <img src={data.imgSrc} alt={data.title} className="projectImg" />
              <div className="projectDesc">
                <p> {data.projectDesc} </p>
              </div>
              <div className="deployButtons">
                <div className="btnGroup">
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "none" }}
                    onClick={() => window.open(data.deployLink, "_blank")}
                  >
                    Live Link
                  </Button>
                  <FormHelperText id="liveLinkHelperText">
                    Deployement link
                  </FormHelperText>
                </div>

                <div className="btnGroup">
                  <Button
                    variant="outlined"
                    className="githubButton"
                    sx={{ backgroundColor: "white" }}
                    onClick={() => window.open(data.frontEndLink, "_blank")}
                  >
                    <img
                      src={github}
                      alt="github link"
                      className="githubLink"
                    />
                  </Button>
                  <FormHelperText id="FrontEndHelperText">
                    Front End Git
                  </FormHelperText>
                </div>

                {data.backEndLink !== "" ? (
                  <div className="btnGroup">
                    <Button
                      variant="outlined"
                      className="githubButton"
                      sx={{ backgroundColor: "white" }}
                      onClick={() => window.open(data.backEndLink, "_blank")}
                    >
                      <img
                        src={github}
                        alt="github link"
                        className="githubLink"
                      />
                    </Button>
                    <FormHelperText id="BackEndHelperText">
                      Back End Git
                    </FormHelperText>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}