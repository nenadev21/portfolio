import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import imgProject1 from "../images/spring.jpg";
import imgProject2 from "../images/winter.jpg";
import imgProject3 from "../images/words.jpg";
import imgProject4 from "../images/teacher.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#ECDEEC",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 400,
    margin: "5rem auto",
  },
  link: {
    paddingLeft: "10px",
    color: "#4A154B",
  },
});

const myProjects = [
  {
    projectName: "Weather App",
    techStack: "HTML, CSS, JavaScript, RESTful API",
    projectDescription: "Still it was a square of faint light.",
    picture: `${imgProject1}`,
    appUrl: "https://reverent-payne-631b6a.netlify.app/",
    appGithub: "https://github.com/nenadev21/outside-is-beautiful",
  },
  {
    projectName: "Weather App v2",
    techStack: "React, JavaScript, JSX, CSS, RESTful API",
    projectDescription: "Still it was a square of faint light.",
    picture: `${imgProject2}`,
    appUrl: "https://nervous-lumiere-b3c929.netlify.app/",
    appGithub: "https://github.com/nenadev21/nature-one",
  },
  {
    projectName: "Dictionary",
    techStack: "React, JavaScript, JSX, CSS, RESTful API",
    projectDescription: "Still it was a square of faint light.",
    picture: `${imgProject3}`,
    appUrl: "https://distracted-dijkstra-06866a.netlify.app/",
    appGithub: "https://github.com/nenadev21/dictionary3",
  },
  {
    projectName: "Teacher Resources App",
    techStack: "React, JavaScript, JSX, CSS, Heroku",
    projectDescription: "Still it was a square of faint light.",
    picture: `${imgProject4}`,
    appUrl: "https://reverent-payne-631b6a.netlify.app/",
    appGithub: "https://github.com/nenadev21/outside-is-beautiful",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {myProjects.map((item, key) => (
          <Grid item xs={12} sm={8} md={6} key={key}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project1"
                  height="140px"
                  image={item.picture}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {item.projectName}
                  </Typography>
                  <Typography variant="body2">{item.techStack}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.projectDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  component="a"
                  href={item.appUrl}
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                  className={classes.link}
                >
                  See App
                </Link>
                <Link
                  component="a"
                  href={item.appGithub}
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                  color="primary"
                  className={classes.link}
                >
                  Code
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
