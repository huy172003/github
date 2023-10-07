import {AppBar, Box, Button, Grid, Link, TextField, Toolbar, Typography} from "@mui/material";
import React from "react";
import bannerLogo from "../assets/images/bannerLogo.png";
import banner from "../assets/images/banner.png";

const Forgotpassword = () => {
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
            <Box>
                <Typography direction={'row'} spacing={5} paddingTop={5}><h1>PASSWORD RESET</h1></Typography>
                <Typography mt={5}>Send password reset instructions to:</Typography>
                <Grid>
                    <Grid item xs={8} mt={5}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: 'calc(30%)'}}/>
                    </Grid>
                </Grid><br/>
                <Button paddingTop={10} variant="contained" disableElevation
                        style={{backgroundColor: '#FF1541', width: 'calc(30%)'}}>
                    Send
                </Button><br/>
                <Typography variant="body2" style={{marginTop: '10px'}}>
                    Not account yet? <Link href="#">Create an account</Link>
                </Typography>
            </Box>
        </div>
    )
}

export default Forgotpassword