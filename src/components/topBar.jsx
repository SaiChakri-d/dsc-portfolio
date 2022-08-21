import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useContext } from "react";
import { appContext } from "../App";

export default function TopBar() {
  const history = useHistory();
  const { appMode, setAppMode } = useContext(appContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            className="titleName"
            sx={{ flexGrow: 1 }}
            style={{ textAlign: "left" }}
          >
           Sai Chakri D
          </Typography>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() => history.push("/")}
          >
            Home
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() => history.push("/about")}
          >
            About
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() => history.push("/skills")}
          >
            Skills
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() => history.push("/education")}
          >
            Education
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() => history.push("/experience")}
          >
            Experience
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() => history.push("/projects")}
          >
            Projects
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Wb5EP5gyMHQZbP5xSb2qn4XUP8tDhkdp/view?usp=sharing",
                "_blank"
              )
            }
          >
            Resume
          </IconButton>

          {/* <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Mode"
            sx={{ mr: 2 }}      
            style={{marginLeft:"auto"}}    
            onClick = { ()=> setAppMode(appMode === 'dark' ? 'light':'dark')}
          >
            {appMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
