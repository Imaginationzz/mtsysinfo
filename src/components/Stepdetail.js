import {
    Box,
    Button,
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { withRouter } from "react-router-dom";
import data from "../data/db"

const useStyles = makeStyles({
    title: {
        fontFamily: "Lobster"
    },
    listitem: {
        color: "#022F41",
        backgroundColor: "#fefefe",
        boxShadow: "5px 5px #888888",
        borderRadius: 10,
        height: "400px",
        fontSize: "36px",
        border: "1px solid black"

    },
    listitemtext: {
        padding: "5px",
        fontWeight: "bold"
    },

    primarytext: {
        color: "red",
        fontWeight: "bold",
        padding: "5px",
    }
})



function Stepdetail(props) {
    const classes = useStyles()
    const [stepId, setStepid] = useState(0)
    const [stepOb, setStepOb] = useState({})

    const addressId = props.match.params.id
    const newStep = data.find((step) => step.id == addressId)



    useEffect(() => {
        setStepid(addressId)
        setStepOb(newStep)


    }, [addressId]);

    // const stepId = props.match.params.id
    // console.log(stepId, "hhhhhh")

    console.log(stepId, "tttttttest")
    console.log(newStep, "sssss")
    console.log(data, "hhhhhh")






    return (
        <Container>
            {newStep && (
                <Box style={{ paddingTop: 100 }}>
                    <Grid container spacing={3}>
                        <Grid item sm={12} xs={12} md={4}><img style={{ width: "600px" }} src={newStep.image}></img></Grid>
                        <Grid item sm={12} xs={12} md={4}></Grid>
                        <Grid item sm={12} xs={12} md={4}>
                            <Typography variant="h4" className={classes.title}>{newStep.title}</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        className={classes.listitem}
                                        primary={<Typography className={classes.primarytext}>General </Typography>}
                                        secondary={<Typography className={classes.listitemtext} type="body2" >{newStep.details}</Typography>}

                                    ></ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={<Typography className={classes.primarytext}>Section </Typography>} secondary={newStep.title} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={<Typography className={classes.primarytext}>Details </Typography>}
                                        secondary={newStep.category}
                                    />
                                </ListItem>

                                <ListItem>
                                    <Button
                                        style={{ marginTop: 50 }}
                                        variant="contained"
                                        color="primary"
                                        startIcon={<Add />}
                                    >
                                        appuiez ici
                                    </Button>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Container>
    );
}
export default withRouter(Stepdetail)