import React from "react";
import Navbar from "./Navbar";
import { makeStyles, withStyles } from "@material-ui/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  mainContainer: {
    background: "#ECDEEC",
    height: "100%",
  },
});

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
        <Box component="form">
          <Typography variant="h5"> Let's talk! </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
          ></InputField>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
