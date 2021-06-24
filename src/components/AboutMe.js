import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box, GridList, GridListTile } from "@material-ui/core";
import DV_NYC from "../images/DV_nyc.jpg";
import DV_train from "../images/DV_train.jpeg";
import DV_withandres from "../images/DV_withandres.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#ECDEEC",
    height: "1450px",
  },
  heading: {
    color: "#4A154B",
    margin: "2rem",
    fontWeight: "700",
    textAlign: "center",
  },
  subHeading: {
    color: "#4A154B",
    margin: "1rem",
    textAlign: "center",
    fontStyle: "italic",
  },
  body: {
    color: "black",
    textAlign: "center",
    margin: "3rem",
  },
  pictures: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    margin: "2rem",
  },
  gridList: {
    width: 700,
    height: 450,
  },
}));

const tileData = [
  {
    img: `${DV_NYC}`,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: `${DV_train}`,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: `${DV_withandres}`,
    title: "Image",
    author: "author",
    cols: 1,
  },
];

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Typography variant="h4" className={classes.heading}>
        About Me
      </Typography>
      <Typography variant="h6" className={classes.subHeading}>
        A few fun facts about myself
      </Typography>
      <Typography variant="body1" component="p" className={classes.body}>
        I work out of Attleboro MA, I love ice cream, gnocchis, and all kinds of
        teas. I like to read biographies and fiction books. I like hiking and
        traveling. I was born and raised in Santiago of Chile. I learned English
        in my 30s while studying in Los Angeles CA. Because of love and business
        school, I moved from Santiago to Boston in 2018.
      </Typography>
      <Typography variant="h6" className={classes.subHeading}>
        My journey as Software Developer
      </Typography>
      <Typography variant="body1" component="p" className={classes.body}>
        I started learning how to code at the beginning of 2021. After working
        in a FinTech Startup for about two years, I felt that becoming a developer
        was the next step in my professional career. I enrolled in an online
        Bootcamp with SheCodes and I've been fully dedicated to learning
        JavaScript, React, and other Front-End libraries since then.
      </Typography>
      <Typography variant="h6" className={classes.subHeading}>
        Unique skills I bring to the table
      </Typography>
      <Typography variant="body1" component="p" className={classes.body}>
        I have a very unique background. I majored in Psychology and then worked
        in Human Resources for mid-size and large companies in different
        sectors. My studies and experiences have helped me understand the
        motivations of people and businesses. For the last three years, I've been
        very involved in the entrepreneurial ecosystem. First at Babson College
        where I studied Human-Centered Design, Innovation and Entrepreneurship. Then, while
        being a member of Impact Hub Boston, CIC, and Venture Lane. My approach
        to the process of building software is empathetic, holistic, and
        centered on the user.
      </Typography>
      <Typography variant="h6" className={classes.subHeading}>
        My goals for 2021
      </Typography>
      <Typography variant="body1" component="p" className={classes.body}>
        I'm looking for opportunities as Apprentice or Junior Developer. I get
        energized by solving complex problems and collaborating with smart and
        kind people. My dream is to work with entrepreneurs, small businesses,
        or tech startups.
      </Typography>
      <Box className={classes.pictures}>
        <GridList cellHeight={250} className={classes.gridList}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Box>
  );
};

export default AboutMe;
