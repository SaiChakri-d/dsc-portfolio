import React, { useState, createContext } from "react";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topBar";
import { NotFound } from "./routes/NotFound";
import Home from "./routes/Home";
import { Education } from "./routes/Education/Education";
import { Experience } from "./routes/Experience/Experience";
import Projects from "./routes/Projects/Projects";
import ParticleBackground from "./components/particleBackground";
import About from "./routes/About/About";
import Skills from "./routes/Skills/Skills";

export const appContext = createContext();
function App() {
  const [appMode, setAppMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: appMode,
    },
  });

  const paperStyles = { borderRadius: 0, minHeight: "100vh" };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={2} style={paperStyles}>
        <ParticleBackground />
        <div className="App">
          <appContext.Provider value={{ appMode, setAppMode, theme }}>
            <TopBar />
          </appContext.Provider>

          <Switch>
            {/* Each route is case, eg. - case '/about': */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              {/* Matcht url display the below component */}
              <Skills />
            </Route>

            <Route path="/education">
              <Education />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
