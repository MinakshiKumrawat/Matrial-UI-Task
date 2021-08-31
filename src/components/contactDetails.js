
import React from 'react';
import { Container, Grid, Button, Radio,  RadioGroup, FormControlLabel, FormLabel,  Typography, TextField, MenuItem, FormControl, Select, InputLabel  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    mainRoot:{
       background:"#ede6e6",
       padding:90,
    },

    formControl: {
        minWidth: 250,
    },

    mb40:{
        marginBottom: 40,
    },
    
    spaceFieldSection:{
       padding: "0 20px",
       marginBottom: 35,
    },

    spaceSection: {
      padding: "0 20px",
      marginBottom: 20,
    },
    
    radioButonCustom:{
        marginTop:15
    },

    radioButoncat:{
      marginTop:9,
    },

    textFieldT:{
        width: "100%",
        color: "#757575!important",
    },
   
    containerBlock:{
      background:"white",
      padding:"24px",
    },
   
    dFlex: {
        display: 'flex',
    },
     
  }));

  
const ContactDetails = () => {
    const classes =  useStyles(); 
    return(
       <div className={classes.mainRoot}>
           <Container maxWidth="sm" className={classes.containerBlock}>
            <Grid className={classes.mb40}>
              <Typography  variant="h4" component="h4" align="center" >
                Contact Details
              </Typography> 
            </Grid>

            
            <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={6} spacing = {2} p={1} className={classes.spaceFieldSection}>
                 <TextField label="Full Name" variant="outlined" className={classes.textFieldT} required/>
              </Grid>
              <Grid item xs={12} sm={6} spacing = {2} className={classes.spaceFieldSection}>
                 <TextField label="Father Name" variant="outlined" className={classes.textFieldT} required/>
              </Grid>
           </Grid> 

           <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={12} spacing = {2} p={1} className={classes.spaceFieldSection}>
                 <TextField label="Address" variant="outlined" name="Address" 
                 className={classes.textFieldT} 
                 multiline rows={4} required/> 
              </Grid>
            </Grid> 

           <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={6} spacing = {2}  className={classes.spaceFieldSection}>
                 <TextField variant="outlined" label="Birthday"  type="date" name="birthDate" 
                 className={classes.spaceFieldSection,classes.textFieldT} InputLabelProps={{shrink: true,}} required/>
              </Grid>

              
              <Grid item xs={12} sm={6} spacing = {2} className={classes.spaceFieldSection} >
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gendar*</FormLabel>
                      <RadioGroup row aria-label="gendar" defaultValue="top"  name="gendar" 
                    >
                        <FormControlLabel
                        value="Male"
                        control={<Radio color="primary" />}
                        label="Male"
                        labelPlacement="Male"
                        />
                        <FormControlLabel
                        value="Female"
                        control={<Radio color="primary" />}
                        label="Female"
                        labelPlacement="Female"
                        />
                      </RadioGroup>
                 </FormControl>
              </Grid>
           </Grid>
           
           <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={6} spacing = {2} p={1} className={classes.spaceFieldSection}>
                 <TextField label="Adhar Card No" variant="outlined" className={classes.textFieldT} type="number" required/>
              </Grid>
              <Grid item xs={12} sm={6} spacing = {2} className={classes.spaceFieldSection}>
                 <TextField label="PAN Card NO" variant="outlined" className={classes.textFieldT} type="number" required/>
              </Grid>
           </Grid> 

           <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={6} spacing = {2} p={1} className={classes.spaceFieldSection}>
                 <TextField label=" E-mail id" variant="outlined" className={classes.textFieldT} required/>
              </Grid>
              <Grid item xs={12} sm={6} spacing = {2} className={classes.spaceFieldSection}>
                  <TextField label="Mobile No. " type="number" variant="outlined"  className={classes.textFieldT} required/>
              </Grid>
           </Grid> 

           <Grid mt={1.5} className={classes.dFlex}>
               <Grid item xs={12} sm={12} spacing = {2} p={1} className={classes.spaceFieldSection} align="left">
                  <label htmlFor="contained-button-file">
                     <Button component="button" type="submit" variant="contained" color="secondary">
                        Submit
                     </Button>
                  </label>
               </Grid>
            </Grid>

        </Container>
       </div>
    )
}


export default ContactDetails;