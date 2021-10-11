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
                        <Grid item xs={12} md={4}><img src={newStep.image}></img></Grid>
                        <Grid item xs={12} md={4}></Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h4" className={classes.title}>{newStep.title}</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary=" General"
                                        secondary={newStep.details}
                                        style={{
                                            color: "#022F41",
                                            backgroundColor: "#fefefe",
                                            boxShadow: "5px 5px #888888",
                                            borderRadius: 10
                                        }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="section" secondary={newStep.title} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="details "
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