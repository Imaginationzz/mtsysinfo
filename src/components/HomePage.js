import React from 'react'
import { Card, Container, Grid, Box, Typography, Button } from '@material-ui/core';
import Singlecard from './Singlecard';
import data from "../data/db"
import FadeIn from "react-fade-in";


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {

        paddingTop: theme.spacing(3),

    },
    title: {

        paddingBottom: theme.spacing(3),
        fontFamily: 'Lobster',

    },

}));


export default function HomePage() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.content}>
            <FadeIn>
                <Typography variant="h1" gutterBottom className={classes.title} >
                    Widen Your Horizons
                </Typography>
                <Grid container spacing={3}>
                    {data.map((step) =>
                        <Grid item xs={12} sm={6} md={3} lg={3} key={step.id}>
                            <Singlecard step={step} />

                        </Grid>
                    )}

                </Grid>
            </FadeIn>
        </Container>
    )
}
