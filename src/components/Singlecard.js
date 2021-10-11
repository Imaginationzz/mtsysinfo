import React from 'react'
import { Card, Container, Grid, Box, Typography, Button } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Add } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";

const useStyles = makeStyles((theme) => ({

    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240,
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between",


    },
    author: {
        display: "flex",
    },
    title: {

        fontFamily: 'Lobster',
    },
}));

export default function Singlecard({ step }) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const onCardClick = (e) => {
        history.push(`/step/${step.id}`);
    };

    return (
        <div>


            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={step.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {step.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {step.details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Button
                        variant="contained"
                        fullWidth
                        startIcon={<Add />}
                        size="small"
                        color="primary"
                        onClick={(e) => {
                            e.stopPropagation();
                            onCardClick(step.id);
                        }}
                        className={classes.title}
                    >
                        more..
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
