import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Avatar from '@material-ui/core/Avatar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  dflex:{
    display:"flex",
  },
  imageList: {
    width: 500,
    height: 450,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  imgLeft:{
maxWidth:"100%",
  },

  spacingtab:{
   marginTop:20 
  },
  gridSpace:{
   padding:"0 15px",
  },
  spaceManageGrid:{
   display:"flex", 
   padding:"0 20px",
  },
  avatarProfile:{
    marginRight: "15px",
    display: "block",
    position: "relative",
    top: "4px",
  },
  profileHead:{
    fontSize: "18px",
    fontWeight: "700",
  },
  profileContent:{
   fontSize:"16px",
  },
  mainHead:{
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "12px",
  },
}));

const About = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Our Mission"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Team" {...a11yProps('two')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one" className={classes.spacingtab}>
        <Grid className={classes.dflex}>
        <Grid item xs={12} sm={4} className={classes.gridSpace}>
              
                
                    <img src="https://www.highmarkhealth.org/annualreport/images/about/mvv.png" alt="img" className={classes.imgLeft}/>
                 
         </Grid>
        <Grid item xs={6} sm={8} className={classes.gridSpace}>
          <Typography component="h2" variant="h4" className={classes.mainHead}>Our Mission</Typography>
          <Typography component="p" variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        </Grid>
        </Grid>
      
      </TabPanel>
      <TabPanel value={value} index="two">
        
        
        <Grid className={classes.dflex}>
          <Grid item sm={4} className={classes.spaceManageGrid}>
            <Box>
              <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" className={classes.avatarProfile}/>
            </Box>
            <Box>
              <Typography component="h3" className={classes.profileHead}>Lorem Ipsum is simply  </Typography>
              <Typography component="p" className={classes.profileContent}>Front-End Developer</Typography>
            </Box>
          </Grid>
          <Grid item sm={4} className={classes.spaceManageGrid}>
            <Box>
              <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" className={classes.avatarProfile}/>
            </Box>
            <Box>
              <Typography component="h3" className={classes.profileHead}>Lorem Ipsum is simply </Typography>
              <Typography component="p" className={classes.profileContent}>Front-End Developer</Typography>
            </Box>
          </Grid>
          <Grid item sm={4} className={classes.spaceManageGrid}>
            <Box>
              <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" className={classes.avatarProfile}/>
            </Box>
            <Box>
              <Typography component="h3" className={classes.profileHead}>Lorem Ipsum is simply  </Typography>
              <Typography component="p" className={classes.profileContent}>Front-End Developer</Typography>
            </Box>
          </Grid>
        </Grid>
       
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
    </div>
  );
}

export default About;
