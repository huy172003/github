import {
    AppBar, Button, FormControl, FormControlLabel, FormLabel,
    Grid, Radio, RadioGroup,
    TextField, Toolbar,
    Typography
} from '@mui/material';
import React from "react";

import bannerLogo from "../assets/images/bannerLogo.png";
import banner from "../assets/images/banner.png";
import '../App.css';

const Signup = () => {
    return (
        <div className={'App'}>
            <AppBar position={'static'}>
                <Toolbar>
                    <img className={'bannerLogo'} src={bannerLogo}/>
                </Toolbar>
                <Toolbar>
                    <img className={'banner'} src={banner}/>
                </Toolbar>
            </AppBar>
            <Typography direction={'row'} spacing={5} mt={5}><h1>CREATE AN ACCOUNT</h1></Typography><b/>
            <Grid container spacing={2} mt={5}>
                <Grid item xs={6}>
                    <FormControl className='gender' >
                        <FormLabel id="demo-radio-buttons-group-label" style={{marginLeft:'47px', fontSize:'20px',fontFamily: 'Alternate-Gothic-No3'}}>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            style={{marginLeft:'40px'}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" style={{width: 'calc(80%)'}}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width: 'calc(80%)'}}/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: 'calc(80%)'}}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" type={"date"} variant="outlined" style={{width: 'calc(80%)'}}/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{width: 'calc(80%)'}}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{width: 'calc(80%)'}}/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid><br/><br/>
            <Button paddingTop={10} variant="contained" disableElevation
                    style={{backgroundColor: '#FF1541', width: 'calc(30%)'}}>
                Login
            </Button><br/>
        </div>
    );
}
export default Signup