import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import serviceImg1 from './../images/services/img-1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  serviceImages:{
     maxWidth:"100%",
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div>
              <h2>Our Services</h2>
              <img src={serviceImg1} alt="img" className={classes.serviceImages}></img>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div>
              <h2>Our Services</h2>
              <img src={serviceImg1} alt="img" className={classes.serviceImages}></img>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div>
              <h2>Our Services</h2>
              <img src={serviceImg1} alt="img" className={classes.serviceImages}></img>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div>
              <h2>Our Services</h2>
              <img src={serviceImg1} alt="img" className={classes.serviceImages}></img>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div>
              <h2>Our Services</h2>
              <img src={serviceImg1} alt="img" className={classes.serviceImages}></img>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div>
              <h2>Our Services</h2>
              <img src={serviceImg1} alt="img" className={classes.serviceImages}></img>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div>
              <h2>Our Services</h2>
              <img src={serviceImg1} alt="img" className={classes.serviceImages}></img>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <div>
              <h2>Our Services</h2>
              <img src={serviceImg1} alt="img" className={classes.serviceImages}></img>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
