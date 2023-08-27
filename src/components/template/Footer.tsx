import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import './Footer.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <Box className="box">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body2">
                            Ciao sono Giorgio, uno studente di CIM. Ho sviluppato questa applicazione per aiutare tutti i miei colleghi.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Me
                        </Typography>
                        <Typography variant="body2">
                            Email: shadigiorgio.islam01@universitadipavia.it
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Me
                        </Typography>
                        <Link to="https://www.facebook.com/">
                            <Facebook />
                        </Link>
                        <Link
                            to="https://www.instagram.com/"
                        >
                            <Instagram />
                        </Link>
                        <Link to="https://www.twitter.com/">
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" align="center">
                        {"Copyright ©"}
                        <Link to="/">S.O.S UNI</Link>
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}