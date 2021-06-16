import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/DaniVera.jpg";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="dani-vera" />
    </Box>
  );
};

export default Header;
