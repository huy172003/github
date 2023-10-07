import React, {useState} from 'react';
import {Button, TextField, Paper, Typography, Link, Grid, Box, Toolbar, AppBar} from '@mui/material';
import bannerLogo from "../assets/images/bannerLogo.png";
import banner from "../assets/images/banner.png";
import logoGoogle from "../assets/images/logoGoogle.png";
import '../App.css';
function Login() {

    return (
        <div className="App">
            <AppBar position={'static'}>
                <Toolbar>
                    <img className={'bannerLogo'} src={bannerLogo}/>
                </Toolbar>
                <Toolbar>
                    <img className={'banner'} src={banner}/>
                </Toolbar>
            </AppBar><br/><br/>
            <Box>
                <Typography direction={'row'} spacing={5}><h1>LOGIN</h1></Typography><b/>
                <Button sx={{border: 1, color: 'text.disabled', width: '10%', height: '22%'}}><img
                    className={'logoGoogle'} src={logoGoogle}/></Button>
                <Typography mt={3}>Sign in with email</Typography>
                <Grid>
                        <Grid item xs={8} mt={5}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: 'calc(30%)'}}/>
                    </Grid>
                    <Grid item xs={8} mt={5}>
                        <TextField id="outlined-basic" label="Password" variant="outlined"
                                   style={{width: 'calc(30%)'}}/>
                    </Grid>
                </Grid>
                <Typography paddingLeft={40} mt={5} variant="body2" style={{marginTop: '10px'}}>
                    <a href="/forgot-password">Forgot Password?</a>
                </Typography><br/>
                <Button paddingTop={10} variant="contained" disableElevation
                        style={{backgroundColor: '#FF1541', width: 'calc(30%)'}}>
                    Login
                </Button><br/>
                <Typography variant="body2" style={{marginTop: '10px'}}>
                    Not account yet? <a href="/signup">Create an account</a>
                </Typography>
            </Box>
            <br/><br/><br/>
        </div>
    );
}

export default Login;
