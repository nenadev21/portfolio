import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../images/DaniVera.jpg";

//CSS styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#874389",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#ffffff",
    fontWeight: 700,
    fontSize: 15,
  },
}));

const menuIcons = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
  },
];

// const renderIcons = (menuIcons) => {
//   menuIcons.map((icon, key) => {
//     return <div index={key}> {icon} </div>;
//   });
// };

// www.flamingoagency.com
const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="dani-vera" />
      <Divider />
      <List>
        {menuIcons.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#4A154B" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5">Portfolio</Typography>
            <MobilRightMenuSlider open={state.right}>
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
