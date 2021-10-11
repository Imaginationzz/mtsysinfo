import React from 'react'
import { Container, Box, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${pic2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "400px",
        display: "flex",
        color: "#fff",
        position: "relative",
        fontSize: "4rem",
        justifyContent: "center",
        width: "100%"



    }
}));

export default function Banner() {
    const classes = useStyles();
    return (

        <Box className={classes.hero}>
            <Box>
                <Typography variant="h6" className={classes.title}>
                    MtSysInfo
                </Typography>
            </Box>
        </Box>


    )
}
