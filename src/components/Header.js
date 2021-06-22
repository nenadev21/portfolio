import React from "react";
import { Typography, Avatar, Grid, Box, makeStyles } from "@material-ui/core";
import avatar from "../images/DaniVera.jpg";
import Typed from "react-typed";

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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="dani-vera" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Daniela Vera"]} typeSpeed={20} />
      </Typography>
      <br />
      <Typography className={classes.subtitle}>
        <Typed
          strings={[
            "Web Design",
            "Web Development",
            "JavaScript",
            "React.js",
            "Software Implementation",
            "Entrepreneurship",
            "Design Thinking",
            "User Experience",
            "Customer Advocacy",
            "FinTech",
            "Business Strategy",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
