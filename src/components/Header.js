import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Avatar,
  Grid,
  Box,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import avatar from "../images/DaniVera.jpg";
import Typed from "react-typed";
import { withStyles } from "@material-ui/styles";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#ffffff",
    fontWeight: "700",
  },
  subtitle: {
    color: "#ffffff",
    marginBottom: "3rem",
    fontWeight: "700",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  listItemSelected: {
    color: "white",
    width: "150px",
    border: "1px solid white",
    borderRadius: "5px",
    textTransform: "uppercase",
    padding: "10px",
    margin: "1rem",
  },
  myButton: {
    margin: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="dani-vera" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Hello, I'm Daniela!"]} typeSpeed={20} />
      </Typography>
      <br />
      <Typography variant="h6" className={classes.subtitle}>
        <Typed
          strings={[
            "Front End Development",
            "JavaScript",
            "React.js",
            "Node.js",
            "Software Implementation",
            "Entrepreneurship",
            "Human-Centered Design",
            "Customer Empathy",
            "User Experience",
            "Business Strategy",
            "FinTech",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Grid container justify="center">
        <ListItem
          selected={true}
          component={Link}
          to="/portfolio"
          className={classes.listItemSelected}
        >
          <Typography variant="body1" className={classes.myButton}>
            Portfolio
          </Typography>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/resume"
          className={classes.listItemSelected}
        >
          <Typography variant="body1" className={classes.myButton}>
            Resume
          </Typography>
        </ListItem>
      </Grid>
    </Box>
  );
};

export default Header;
