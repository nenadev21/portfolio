import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Box, CardActions, Link } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#ECDEEC',
    maxHeight: '100%',
  },
  timeline: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '96%',
      border: '1px solid #bc98bc',
    },
    '&: after': {
      content: "''",
      position: 'absolute',
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  //items with description
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid #bc98bc',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&: after': {
      content: "''",
      position: 'absolute',
    },
    '&: before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      // boderColor: "tomato tomato transparent transparent",
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&nth-of-type(2nd)': {
        float: 'right',
        margin: '1rem',
        borderColor: '#bc98bc',
      },
      '&:nth-of-type(2nd):before': {
        right: 'auto',
        left: '0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  // year box
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: '#4A154B',
    color: 'white',
    lineHeight: 1,
    padding: '1rem 0',
    '&: before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&: nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&: nth-of-type(2nd):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: '#4A154B',
    padding: '3rem 0 0 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#4A154B',
    padding: '0',
    textTransform: 'uppercase',
  },
  body: {
    color: '#1264A3',
    fontStyle: 'italic',
  },
  subtitle: {
    color: 'black',
  },
  link: {
    color: '#1264A3',
    fontSize: '20px',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component='header' className={classes.mainContainer}>
        <Typography variant='h5' align='center' className={classes.heading}>
          Working Experience
        </Typography>
        <Box component='div' className={classes.timeline}>
          <Typography
            variant='h6'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2007-2018
          </Typography>
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              HR Professional
            </Typography>
            <Typography variant='body1' align='center' className={classes.body}>
              Aconcagua Foods, Sodexo, Thyssenkrupp
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              className={classes.subtitle}
            >
              Designed and implemented HR initiatives to boost employee
              experience and business results.
            </Typography>
          </Box>
          <Typography
            variant='h6'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019-2021
          </Typography>
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              Customer Success & Operations
            </Typography>
            <Typography variant='body1' align='center' className={classes.body}>
              Gain Life
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              className={classes.subtitle}
            >
              Lead process implementation and software configuration. Verify
              customer production environments for deployment of software
              updates. Advocate for customers, supporting them towards system
              adoption. Support QA efforts.
            </Typography>
          </Box>
          <Typography
            variant='h5'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020-2021
          </Typography>
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              Font End Developer
            </Typography>
            <Typography variant='body1' align='center' className={classes.body}>
              Self-Employed
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              className={classes.subtitle}
            >
              Creating web applications using JavaScript and React. Using
              customer empathy, human-centered design methodologies, and UX/UI
              best practices.
            </Typography>
          </Box>
          <CardActions>
            <Link
              component='a'
              href='https://s3.us-east-2.amazonaws.com/myresume3.6.23/Daniela+Vera_Resume_2.20.23_EN.pdf'
              target='_blank'
              rel='noreferrer'
              size='small'
              className={classes.link}
            >
              Download Resume
            </Link>
          </CardActions>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
