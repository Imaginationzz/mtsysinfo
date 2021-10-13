import React from "react";
import {
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import mtsyslogowb from "../images/mtsyslogowb.png";
import mtsyslogo2 from "../images/mtsyslogo2.jpeg";

const useStyles = makeStyles({
    outerContainer: {
        marginTop: 100,
        minHeight: 400,
        background: "#022f40",
        color: "#fff",
        paddingTop: 100,
        paddingBottom: 100,
    },
});
export default function Footer() {
    const theme = useTheme();


    const classes = useStyles();

    return (
        <div className={classes.outerContainer} style={{ paddingTop: "2rem" }}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={mtsyslogo2} style={{ width: 100 }} />
                            <Typography
                                variant="h6"
                                style={{ fontWeight: "bold", marginLeft: "1em" }}
                            >
                                MtSysInfo
                            </Typography>
                        </div>
                        <p>Choisy le roi , Paris</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <List>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText>
                                    <strong style={{ fontSize: 32 }}>Nos Services</strong>
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText> Big Data</ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText> Dev Web</ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText></ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText></ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <List>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText>
                                    <strong style={{ fontSize: 32 }}>Info</strong>
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText>Aide</ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText>Contactez nous </ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText>FAQ</ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText>vision</ListItemText>
                            </ListItem>
                            <ListItem
                                style={{ textDecoration: "none", color: "inherit" }}
                                component="a"
                                href="#"
                            >
                                <ListItemText> </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
