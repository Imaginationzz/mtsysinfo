import React, { useState, useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Container } from "@material-ui/core";
import projects from "../data/projects"
import { useHistory } from "react-router-dom";

export default function HeroCarousel() {
    const history = useHistory();

    const [value, setValue] = useState(0);



    return (
        <Container style={{ marginTop: 100 }}>
            <Carousel
                style={{ borderRadius: 15 }}
                value={value}
                slides={projects.map((project) => (
                    <img
                        alt={project.title}
                        src={project.image}
                        style={{
                            width: "100%", // 2000
                            height: 600, // 800
                            objectFit: "cover",

                            borderRadius: 15,
                        }}
                    />
                ))}
                onChange={setValue}
            />
            <div
                style={{
                    maxWidth: "100vw",
                    overflowX: "auto",
                    marginTop: 50,
                    marginBottom: 70,
                }}
            >
                <Dots
                    // number={thumbnails.length}
                    thumbnails={projects.map((project) => (

                        <img
                            alt={project.title}
                            src={project.image}
                            style={{ width: 120, height: 60, objectFit: "cover" }}
                        // onClick={() => history.push(`/project/${project.id}`)}

                        />

                    ))}
                    value={value}
                    onChange={setValue}


                />
            </div>
        </Container>
    );
}
