import React from "react";
import Navbar from "./Navbar";
import { makeStyles, withStyles } from "@material-ui/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#ECDEEC",
    height: "580px",
  },
  contactForm: {
    transform: "translate(-50%, - 50%)",
    position: "relative",
  },
  myGoal: {
    margin: "20px",
  },
  button: {
    marginTop: "1rem",
    background: "#4A154B",
    color: "#FFFFFF",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#BC98BC",
    },
    "& label": {
      color: "#BC98BC",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#4A154B",
      },
      "&:hover fieldset": {
        borderColor: "#4A154B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4A154B",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Typography variant="body1" className={classes.myGoal}>
          {" "}
          I'm looking for opportunities as Front End Developer Apprentice or
          Junior Developer. I get energized by solving complex problems and
          collaborating with smart and kind people. My dream is to work with
          entrepreneurs, small businesses or tech startups. If that resonates
          with you, let's chat!
        </Typography>
        <Box component="form" className={classes.contactForm}>
          <InputField
            fullWidth={true}
            label="First Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "#4A154B" } }}
          ></InputField>
          <InputField
            fullWidth={true}
            label="Last Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "#4A154B" } }}
          ></InputField>
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "#4A154B" } }}
          ></InputField>
          <br />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            className={classes.button}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
