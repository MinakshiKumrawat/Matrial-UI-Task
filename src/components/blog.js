import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageList from '@material-ui/core/ImageList';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';



const tutorialSteps = [
    {
      label: "Lorem1",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
      label: "Lorem2",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
      label: "Lorem3",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      label: "Lorem14",
      imgPath:
        "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
      label: "Lorem5",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
    }
  ];
  

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
     
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }));

  export default function Blog() {
    const classes = useStyles(); 
     
    return (
        <div className={classes.root}>
          <ImageList rowHeight={200} gap={1} className={classes.imageList}>
            {tutorialSteps.map((item) => (
              <ImageListItem >
                <img src={item.imgPath} alt={item.label} />
                <ImageListItemBar
                  title={item.label}
                  position="top"
                 
                  actionPosition="left"
                  className={classes.titleBar}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <ImageList rowHeight={200} gap={1} className={classes.imageList}>
            {tutorialSteps.map((item) => (
              <ImageListItem >
                <img src={item.imgPath} alt={item.label} />
                <ImageListItemBar
                  title={item.label}
                  position="top"
                 
                  actionPosition="left"
                  className={classes.titleBar}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      );
    }
 