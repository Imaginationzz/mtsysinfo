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

import { withRouter } from "react-router-dom";
import projects from "../data/projects"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItemContent: {

        textAlign: "right",

    },

}));


function Projectdetail(props) {
    const classes = useStyles()
    const [projectId, setProjectid] = useState(0)
    const [projectOb, setProjectOb] = useState({})

    const addressId = props.match.params.id
    const newProject = projects.find((project) => project.id == addressId)



    useEffect(() => {
        setProjectid(addressId)
        setProjectOb(newProject)


    }, [addressId]);

    // const stepId = props.match.params.id
    // console.log(stepId, "hhhhhh")








    return (
        <Container>
            {newProject && (
                <Box style={{ paddingTop: 100 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}><img src={newProject.image}></img></Grid>
                        <Grid item xs={12} md={4}></Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h4">{newProject.title}</Typography>
                            <List>
                                <ListItem className={classes.listItemContent}>
                                    <ListItemText
                                        primary=" تفاصيل المشروع"
                                        secondary={newProject.details}
                                        style={{
                                            color: "#022F41",
                                            backgroundColor: "#F0F8FF",
                                            boxShadow: "5px 5px #888888",
                                            borderRadius: "5px"
                                        }}
                                    />
                                </ListItem>
                                <ListItem className={classes.listItemContent}>
                                    <ListItemText primary="الإدارة" secondary={newProject.title} />
                                </ListItem>
                                <ListItem style={{ textAlign: "right" }}>
                                    <ListItemText
                                        primary="الدرجة المالية"
                                        secondary={newProject.category}
                                    />
                                </ListItem>
                                <ListItem className={classes.listItemContent}>
                                    <ListItemText primary="القسم" secondary={newProject.id} />
                                </ListItem>
                                <ListItem>
                                    <Button
                                        style={{ marginTop: 50 }}
                                        variant="contained"
                                        color="primary"
                                        startIcon={<Add />}
                                    >
                                        الضغط هنا
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
export default withRouter(Projectdetail)