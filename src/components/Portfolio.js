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
    maxWidth: "400px",
    margin: "5rem auto",
  },
  link: {
    paddingLeft: "10px",
    color: "#4A154B",
  },
  projectName: {
    color: "#4A154B",
    fontWeight: "700",
    marginBottom: "0.5rem",
  },
  roleAndDate: {
    textTransform: "uppercase",
  },
  techStack: {
    fontStyle: "italic",
    marginBottom: "0.5rem",
  },
});

const myProjects = [
  {
    projectName: "Weather App",
    roleAndDate: "Sole Developer - February '21",
    techStack:
      "HTML, CSS, JavaScript, RESTful API, Axios, Bootstrap, and Netlify",
    projectDescription:
      "This web application displays real-time weather and forecast information. It was my first coding project ever. This was a great opportunity to learn the fundamentals of JavaScript and the process of getting data from external JSON objects. At first, I struggled to understand how functions interact with each other, how to understand the documentation and API responses, and how to make the site stay in the frame.",
    picture: `${imgProject1}`,
    appUrl: "https://reverent-payne-631b6a.netlify.app/",
    appGithub: "https://github.com/nenadev21/outside-is-beautiful",
  },
  {
    projectName: "Weather App (React)",
    roleAndDate: "Sole Developer - April '21",
    techStack:
      "React, JavaScript, JSX, CSS, Node.js, RESTful API, Axios, Bootstrap, and Netlify",
    projectDescription:
      "This web application displays real-time weather and forecast information. It follows pretty much the same design of the prior App but it was built in React. With React it was love at the first sight!. I liked the modularity, structure between components, and potential for scalability. It was a fun project that helped me learn how to set up a project using the React boilerplate and incorporate dependencies.",
    picture: `${imgProject2}`,
    appUrl: "https://nervous-lumiere-b3c929.netlify.app/",
    appGithub: "https://github.com/nenadev21/nature-one",
  },
  {
    projectName: "Dictionary App",
    roleAndDate: "Sole Developer - June '21",
    techStack:
      "React, JavaScript, JSX, CSS, Node.js, RESTful API, Axios, Bulma, and Netlify",
    projectDescription:
      "This web application displays the meaning of any word in English and a couple of images to illustrate the word. It was built while doing a React course. It helped me expand my knowledge of React and understand the documentacion from other APIs such as Pexels. It was a fun project. I was able to explore other CSS libraries like Bulma and improve on how I set the structure of my projects.",
    picture: `${imgProject3}`,
    appUrl: "https://distracted-dijkstra-06866a.netlify.app/",
    appGithub: "https://github.com/nenadev21/dictionary3",
  },
  {
    projectName: "Teacher Resources App",
    roleAndDate: "Front End Developer - March '21 to date",
    techStack:
      "React, JavaScript, JSX, CSS, Node.js, Bulma, Material UI, Heroku, and Netlify",
    projectDescription:
      "This web application provides full lessons and resources that music teachers from primary schools can use in their classes. It was inspired after knowing that music teachers in Chile spend too much time looking for resources that can help them keep students engaged. This is an ongoing project in which I've been collaborating. The other members of the team are Alan (Music teacher) and Arit (Full stack developer).",
    picture: `${imgProject4}`,
    appUrl: "https://serene-tesla-00c8c3.netlify.app",
    appGithub: "https://github.com/nenadev21/edu-mus2.0",
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
                  <Typography variant="h5" className={classes.projectName}>
                    {item.projectName}
                  </Typography>
                  <Typography variant="body2" className={classes.roleAndDate}>
                    {item.roleAndDate}
                  </Typography>
                  <Typography variant="body2" className={classes.techStack}>
                    {item.techStack}
                  </Typography>{" "}
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
                  APP
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
                  CODE
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
