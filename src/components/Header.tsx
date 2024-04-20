import React from "react";
import { AppBar, Toolbar} from "@mui/material";
import { primaryColor, secondaryColor } from "../utils/colors";
import Logo from "../assets/logo-teste.svg";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
        color: secondaryColor,
        maxHeight: 50
      }}
    >
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ maxHeight: 25, position: "fixed", paddingBottom: '16px'}} />{" "}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
