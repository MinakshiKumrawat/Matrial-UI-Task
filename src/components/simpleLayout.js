import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ContactsIcon from '@material-ui/icons/Contacts';
import InboxIcon from '@material-ui/icons/Inbox';
import BookIcon from '@material-ui/icons/Book';
import StarIcon from '@material-ui/icons/Star';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import HomeComponent from './homeComponent';
import About from './about';
import Services from './services';
import ContactDetails from './contactDetails';
import Blog from './blog';
import TableData from './tableData';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  iconColor:{
      color:"#8f00ff",
  },
  headerColor:{
      background:"#8f00ff",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dropDownCss:{
   paddingLeft:20,
  },
}));

const SimpleLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  
  return (
    <div className={classes.root}>
     <Router >   
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.headerColor}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon className={classes.iconColor}><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon className={classes.iconColor}><InfoIcon /></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/services">
              <ListItemIcon className={classes.iconColor}><SettingsApplicationsIcon /></ListItemIcon>
              <ListItemText primary="Servies" />
            </ListItem>
            <ListItem button component={Link} to="/ContactDetails">
              <ListItemIcon className={classes.iconColor}><ContactsIcon /></ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button onClick={handleClick} >
                    <ListItemIcon className={classes.iconColor}>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {dropdown ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={dropdown} timeout="auto" unmountOnExit className={classes.dropDownCss}>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to="/table">
                        <ListItemIcon className={classes.iconColor}>
                        <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Stared" />
                    </ListItem>
                    </List>
                </Collapse>
        </List>
        <Divider />
        <List>
        <ListItem button component={Link} to ="/blog">
              <ListItemIcon className={classes.iconColor}><BookIcon /></ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contactDetails" component={ContactDetails} />
        <Route path="/blog" component ={Blog} />
        <Route path="/table" component ={TableData} />

      </main>
     </Router>
    </div>
  );
}


export default  SimpleLayout;