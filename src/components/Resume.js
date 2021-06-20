import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    maxHeight: "100%",
  },
  timeline: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
    },
    "&: after": {
      content: "''",
      position: "absolute",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  //year container
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&: after": {
      content: "''",
      position: "absolute",
    },
    "&: before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      boderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&nth-of-type(2nd)": {
        float: "right",
        margin: "1rem",
        borderColor: "red",
      },
      "&:nth-of-type(2nd):before": {
        right: "auto",
        left: "0.625rem",
        borderColor: "transparent transparent blue blue",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "1rem 0",
    "&: before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&: nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&: nth-of-type(2nd):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h5" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeline}>
          <Typography
            variant="h6"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2007-2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              HR Professional
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Aconcagua Foods, Sodexo, Thyssenkrupp
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Designing and implementing HR initiatives to drive employee
              experience and business results.
            </Typography>
          </Box>
          <Typography
            variant="h6"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019-2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Customer Success & Operations
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Gain Life
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Lead process implementation and software configuration. Verify
              customer production environments for deployment of software
              updates. Advocate for customers, supporting them towards system
              adoption. Support QA efforts.
            </Typography>
          </Box>
          <Typography
            variant="h5"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020-2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Font End Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Self-Employed
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Web development of projects using JavaScript and React.JS.
              Applying design thinking methodologies and UX best practices.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
