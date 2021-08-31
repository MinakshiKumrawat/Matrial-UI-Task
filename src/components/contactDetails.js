
import React, { useState } from 'react';
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

   const [state, setState] = useState({
      fullName: "",
      fatherName: "",
      address: "",
      birhtDate:"",
      gendar:"",
      adharCard:"",
      panCard:"",
      email:"",
      mobile:"",
    });
  
    const handleInputChange = (event) => {
      setState((prevProps) => ({
        ...prevProps,
        [event.target.name]: event.target.value
      }));
    };
    
    const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    const handleSubmit = (event) => {
      if((state.fullName == "") || (state.fatherName == "") || (state.address == "") || (state.birthDate == "") 
      || (state.gendar == "") || (state.adharCard == "") || (state.panCard == "") || (state.email == "") 
      ||  (state.mobile == "")
      )
      {
        alert("Please fill all required fields");
        event.preventDefault();
      }    
      else 
      if (!state.email.length) {
        alert('Please enter valid email');
        event.preventDefault();
      } 
      else if (!emailRegex.test(state.email)) {
        alert('Please enter Valid Email');
        event.preventDefault();
      }
      else if ((state.mobile.length <= 9) || (state.mobile.length >= 11)){
        alert('Please enter valid phone number');
        event.preventDefault();
      }
     else{
     
      console.log(state);
      console.log(`Name: `+ state.fullName +
      `, Email: ` + state.fatherName + `, Password: ` + state.address + `, Date of birth: ` 
      + state.birhtDate +  `, Gendar: ` + state.gendar + `, Adhar Card: ` + state.adharCard + `, PAN Card: ` 
      + state.panCard + `, Email: ` + state.email + `, Mobile Number: ` + state.mobile );
      alert(`Name: `+ state.fullName +
      `, Email: ` + state.fatherName + `, Password: ` + state.address + `, Date of birth: ` 
      + state.birhtDate +  `, Gendar: ` + state.gendar + `, Adhar Card: ` + state.adharCard + `, PAN Card: ` 
      + state.panCard + `, Email: ` + state.email + `, Mobile Number: ` + state.mobile);
      event.preventDefault();
     }
    };



    const classes =  useStyles(); 
    return(
       <div className={classes.mainRoot}>
           <Container maxWidth="sm" className={classes.containerBlock}>
            <Grid className={classes.mb40}>
              <Typography  variant="h4" component="h4" align="center" >
                Contact Details
              </Typography> 
            </Grid>

            <form method="post" onSubmit={handleSubmit}>
            <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={6} spacing = {2} p={1} className={classes.spaceFieldSection}>
                 <TextField label="Full Name" name="fullName" value={state.fullName} variant="outlined" className={classes.textFieldT} 
                 onChange={handleInputChange} required/>
              </Grid>
              <Grid item xs={12} sm={6} spacing = {2} className={classes.spaceFieldSection}>
                 <TextField label="Father Name" variant="outlined" name="fatherName" value={state.fatherName} className={classes.textFieldT} 
                 onChange={handleInputChange} required/>
              </Grid>
           </Grid> 

           <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={12} spacing = {2} p={1} className={classes.spaceFieldSection}>
                 <TextField label="Address" variant="outlined" name="address"  value={state.address}
                 className={classes.textFieldT} onChange={handleInputChange}
                 multiline rows={4} required/> 
              </Grid>
            </Grid> 

           <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={6} spacing = {2}  className={classes.spaceFieldSection}>
                 <TextField variant="outlined" label="Birthday"  type="date" name="birthDate" value={state.birthDate}
                 className={classes.spaceFieldSection,classes.textFieldT} InputLabelProps={{shrink: true,}} 
                 onChange={handleInputChange} required/>
              </Grid>

              
              <Grid item xs={12} sm={6} spacing = {2} className={classes.spaceFieldSection} >
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gendar*</FormLabel>
                      <RadioGroup row aria-label="gendar" defaultValue="top"  name="gendar"  onChange={handleInputChange}  
                      value={state.gendar}
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
                 <TextField label="Adhar Card No" variant="outlined" className={classes.textFieldT} type="number" 
                 onChange={handleInputChange} name="adharCard" value={state.adharCard} required/>
              </Grid>
              <Grid item xs={12} sm={6} spacing = {2} className={classes.spaceFieldSection}>
                 <TextField label="PAN Card NO" variant="outlined" name="panCard" value={state.panCard} 
                 className={classes.textFieldT} 
                 onChange={handleInputChange} required/>
              </Grid>
           </Grid> 

           <Grid mt={1.5} className={classes.dFlex}>
              <Grid item xs={12} sm={6} spacing = {2} p={1} className={classes.spaceFieldSection}>
                 <TextField label=" E-mail id" variant="outlined" type="email" name="email" 
                 className={classes.textFieldT} value={state.email} 
                 onChange={handleInputChange} required/>
              </Grid>
              <Grid item xs={12} sm={6} spacing = {2} className={classes.spaceFieldSection}>
                  <TextField label="Mobile No. " type="number" variant="outlined"  
                  className={classes.textFieldT} value={state.mobile} name="mobile"
                  onChange={handleInputChange} required/>
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
          </form>
        </Container>
       </div>
    )
}


export default ContactDetails;